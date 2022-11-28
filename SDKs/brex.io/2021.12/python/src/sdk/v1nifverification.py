import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class V1NifVerification:
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

    
    def nif_basic(self, request: operations.NifBasicRequest) -> operations.NifBasicResponse:
        r"""Verifies a NIF number
        Performs a basic verification check of a given NIF tax number against NIF.com. Optional parameters may be added to improve calculation of confidence score.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/nif-verification/basic-check/{country}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.NifBasicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.nif_basic_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.nif_basic_default_application_json_any = out

        return res

    
    def nif_comprehensive(self, request: operations.NifComprehensiveRequest) -> operations.NifComprehensiveResponse:
        r"""Verifies a NIF number and retrieves company data
        Comprehensive verification of given portuguese NIF number against NIF.com. Optional parameters may help to build a better confidence score. Additional company data will be provided.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/nif-verification/comprehensive-check/{country}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.NifComprehensiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.nif_comprehensive_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.nif_comprehensive_default_application_json_any = out

        return res

    