import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class V1EinVerification:
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

    
    def ein_verification_basic(self, request: operations.EinVerificationBasicRequest) -> operations.EinVerificationBasicResponse:
        r"""Verifies an EIN number
        Performs a basic verification check of a given EIN tax number.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/ein-verification/basic-check"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EinVerificationBasicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ein_verification_basic_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ein_verification_basic_default_application_json_any = out

        return res

    
    def ein_verification_comprehensive(self, request: operations.EinVerificationComprehensiveRequest) -> operations.EinVerificationComprehensiveResponse:
        r"""Verifies EIN number and retrieves company data
        Comprehensive verification of a given EIN number. Additionally to the basic verification it will lookup company details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/ein-verification/comprehensive-check"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EinVerificationComprehensiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ein_verification_comprehensive_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ein_verification_comprehensive_default_application_json_any = out

        return res

    
    def ein_verification_lookup(self, request: operations.EinVerificationLookupRequest) -> operations.EinVerificationLookupResponse:
        r"""Retrieves a list of EIN numbers
        Lookup EIN number for a company by its company name
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/ein-verification/lookup"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EinVerificationLookupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ein_verification_lookup_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.ein_verification_lookup_default_application_json_any = out

        return res

    