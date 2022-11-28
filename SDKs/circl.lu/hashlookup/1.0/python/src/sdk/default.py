import requests
from sdk.models import operations
from . import utils

class Default:
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

    
    def get_lookup_sha1_sha1_(self, request: operations.GetLookupSha1Sha1Request) -> operations.GetLookupSha1Sha1Response:
        r"""Lookup SHA-1.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/sha1/{sha1}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLookupSha1Sha1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_session_get_name_(self, request: operations.GetSessionGetNameRequest) -> operations.GetSessionGetNameResponse:
        r"""Return set of matching and non-matching hashes from a session.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/session/get/{name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSessionGetNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_info(self) -> operations.GetInfoResponse:
        r"""Info about the hashlookup database
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/info"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_lookup(self, request: operations.GetLookupRequest) -> operations.GetLookupResponse:
        r"""Lookup MD5.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/md5/{md5}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLookupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_sessioncreate(self, request: operations.GetSessioncreateRequest) -> operations.GetSessioncreateResponse:
        r"""Create a session key to keep search context. The session is attached to a name. After the session is created, the header `hashlookup_session` can be set to the session name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/session/create/{name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSessioncreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_bulkmd5(self) -> operations.PostBulkmd5Response:
        r"""Bulk search of MD5 hashes in a JSON array with the key 'hashes'.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bulk/md5"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostBulkmd5Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_bulksha1(self) -> operations.PostBulksha1Response:
        r"""Bulk search of SHA1 hashes in a JSON array with the 'hashes'.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bulk/sha1"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostBulksha1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    