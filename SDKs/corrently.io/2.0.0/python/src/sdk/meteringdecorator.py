import requests
from typing import Optional
from sdk.models import operations
from . import utils

class MeteringDecorator:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def metering_get(self, request: operations.MeteringGetRequest) -> operations.MeteringGetResponse:
        r"""Meter Reading
        Retrieves a metered reading using account (Stromkonto).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/metering/reading"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MeteringGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MeteringGet200ApplicationJSON])
                res.metering_get_200_application_json_object = out

        return res

    
    def metering_post(self, request: operations.MeteringPostRequest) -> operations.MeteringPostResponse:
        r"""Meter Reading
        Post meter reading and get it decorated. Best practice is to first create a new Stromkonto with the register method and choose a nice secret to protect updates. Now regularly send updates to get readings (consumption) split into green power (1.8.1) and grey power (1.8.2).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/metering/reading"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MeteringPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MeteringPost200ApplicationJSON])
                res.metering_post_200_application_json_object = out

        return res

    