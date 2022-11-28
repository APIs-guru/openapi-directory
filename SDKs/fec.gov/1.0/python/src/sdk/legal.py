import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Legal:
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

    
    def get_legal_search_(self, request: operations.GetLegalSearchRequest) -> operations.GetLegalSearchResponse:
        r"""
        Search legal documents by document type, or across all document types using keywords, parameter values and ranges.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/legal/search/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLegalSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLegalSearchDefaultApplicationJSON])
                res.get_legal_search_default_application_json_object = out

        return res

    