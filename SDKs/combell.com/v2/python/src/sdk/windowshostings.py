import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class WindowsHostings:
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

    
    def get_windows_hosting(self, request: operations.GetWindowsHostingRequest) -> operations.GetWindowsHostingResponse:
        r"""Windows hosting detail
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/windowshostings/{domainName}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWindowsHostingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WindowsHostingDetail])
                res.windows_hosting_detail = out

        return res

    
    def get_windows_hostings(self, request: operations.GetWindowsHostingsRequest) -> operations.GetWindowsHostingsResponse:
        r"""Overview of windows hostings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/windowshostings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWindowsHostingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.WindowsHosting]])
                res.windows_hostings = out

        return res

    