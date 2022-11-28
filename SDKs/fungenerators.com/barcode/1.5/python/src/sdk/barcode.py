import requests
from sdk.models import operations
from . import utils

class Barcode:
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

    
    def get_barcode_decode_types(self, request: operations.GetBarcodeDecodeTypesRequest) -> operations.GetBarcodeDecodeTypesResponse:
        r"""Get the supported barcode types for the decoding process.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/barcode/decode/types"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBarcodeDecodeTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_barcode_encode(self, request: operations.GetBarcodeEncodeRequest) -> operations.GetBarcodeEncodeResponse:
        r"""Get a Bar Code image for the given barcode number
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/barcode/encode"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBarcodeEncodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_barcode_encode_types(self, request: operations.GetBarcodeEncodeTypesRequest) -> operations.GetBarcodeEncodeTypesResponse:
        r"""Get the supported barcode types for encoding / image generation.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/barcode/encode/types"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBarcodeEncodeTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def post_barcode_decode(self, request: operations.PostBarcodeDecodeRequest) -> operations.PostBarcodeDecodeResponse:
        r"""Decode a Barcode image and return the cotents if successful
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/barcode/decode"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostBarcodeDecodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    