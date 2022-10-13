import warnings
import requests
from sdk.models import operations
from . import utils


SERVERS = [
	"http://api.fungenerators.com",
	"https://api.fungenerators.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def get_barcode_decode_types(self, request: operations.GetBarcodeDecodeTypesRequest) -> operations.GetBarcodeDecodeTypesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/barcode/decode/types"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBarcodeDecodeTypesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_barcode_encode(self, request: operations.GetBarcodeEncodeRequest) -> operations.GetBarcodeEncodeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/barcode/encode"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBarcodeEncodeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_barcode_encode_types(self, request: operations.GetBarcodeEncodeTypesRequest) -> operations.GetBarcodeEncodeTypesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/barcode/encode/types"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBarcodeEncodeTypesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def post_barcode_decode(self, request: operations.PostBarcodeDecodeRequest) -> operations.PostBarcodeDecodeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/barcode/decode"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostBarcodeDecodeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    