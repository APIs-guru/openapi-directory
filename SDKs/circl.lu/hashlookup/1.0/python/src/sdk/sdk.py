import warnings
import requests
from sdk.models import operations
from . import utils


SERVERS = [
	"https://circl.lu/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def get_lookup_sha1_sha1_(self, request: operations.GetLookupSha1Sha1Request) -> operations.GetLookupSha1Sha1Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/lookup/sha1/{sha1}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLookupSha1Sha1Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def get_session_get_name_(self, request: operations.GetSessionGetNameRequest) -> operations.GetSessionGetNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/session/get/{name}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSessionGetNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def get_info(self) -> operations.GetInfoResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/info"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInfoResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def get_lookup(self, request: operations.GetLookupRequest) -> operations.GetLookupResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/lookup/md5/{md5}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLookupResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def get_sessioncreate(self, request: operations.GetSessioncreateRequest) -> operations.GetSessioncreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/session/create/{name}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSessioncreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_bulkmd5(self) -> operations.PostBulkmd5Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/bulk/md5"
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostBulkmd5Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_bulksha1(self) -> operations.PostBulksha1Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/bulk/sha1"
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostBulksha1Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    