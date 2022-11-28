

import requests
from typing import Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"https://apisetu.gov.in/mcimindia/v3",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def govid(self, request: operations.GovidRequest) -> operations.GovidResponse:
        r"""ID Card
        API to verify ID Card.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/govid/certificate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GovidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Govid400ApplicationJSON])
                res.govid_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Govid401ApplicationJSON])
                res.govid_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Govid404ApplicationJSON])
                res.govid_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Govid500ApplicationJSON])
                res.govid_500_application_json_object = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Govid502ApplicationJSON])
                res.govid_502_application_json_object = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Govid503ApplicationJSON])
                res.govid_503_application_json_object = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Govid504ApplicationJSON])
                res.govid_504_application_json_object = out

        return res

    
    def phcer(self, request: operations.PhcerRequest) -> operations.PhcerResponse:
        r"""Pharmacist Registration Certificate
        API to verify Pharmacist Registration Certificate.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/phcer/certificate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PhcerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Phcer400ApplicationJSON])
                res.phcer_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Phcer401ApplicationJSON])
                res.phcer_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Phcer404ApplicationJSON])
                res.phcer_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Phcer500ApplicationJSON])
                res.phcer_500_application_json_object = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Phcer502ApplicationJSON])
                res.phcer_502_application_json_object = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Phcer503ApplicationJSON])
                res.phcer_503_application_json_object = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Phcer504ApplicationJSON])
                res.phcer_504_application_json_object = out

        return res

    