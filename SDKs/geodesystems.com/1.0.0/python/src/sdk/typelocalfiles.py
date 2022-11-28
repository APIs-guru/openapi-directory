import requests
from sdk.models import operations
from . import utils

class TypeLocalfiles:
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

    
    def search_localfiles(self, request: operations.SearchLocalfilesRequest) -> operations.SearchLocalfilesResponse:
        r"""Search API for 'Server Side Files' entry type
        API to search for entries of type Server Side Files
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/repository/search/type/localfiles"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchLocalfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    