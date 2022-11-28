import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Returns:
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

    
    def get_returns(self, request: operations.GetReturnsRequest) -> operations.GetReturnsResponse:
        r"""List Returns
        Retrieves summary return activity during the queried timespan. Although return knowledge can be learned from `GET /orders/{id}` it can take an unknown amount of time for an order that is refused or undeliverable to return to an FDC facility. Instead we recommend regularly querying this API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/returns"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReturnsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReturnsReturnsArrayV2])
                res.returns_array_v2 = out

        return res

    
    def put_returns(self, request: operations.PutReturnsRequest) -> operations.PutReturnsResponse:
        r"""Inform us of an RMA
        Inform FDC of an expected return.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/returns"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutReturnsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutReturnsRmaResponseV2])
                res.rma_response_v2 = out
        elif r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnereturnsPutResponses201ContentApplication1jsonSchema])
                res.onereturns_put_responses_201_content_application_1json_schema = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneordersGetResponses404ContentApplication1jsonSchema])
                res.oneorders_get_responses_404_content_application_1json_schema = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnereturnsPutResponses201ContentApplication1jsonSchema])
                res.onereturns_put_responses_201_content_application_1json_schema = out

        return res

    