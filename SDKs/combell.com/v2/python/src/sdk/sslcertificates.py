import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class SslCertificates:
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

    
    def download_certificate(self, request: operations.DownloadCertificateRequest) -> operations.DownloadCertificateResponse:
        r"""Download a SSL certificate
        Returns the certifcate as binary data with the content-type and the filename information in the response headers.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sslcertificates/{sha1Fingerprint}/download", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DownloadCertificateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.download_certificate_200_application_json_binary_string = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_ssl_certificate(self, request: operations.GetSslCertificateRequest) -> operations.GetSslCertificateResponse:
        r"""Detail of a SSL certificate
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sslcertificates/{sha1Fingerprint}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSslCertificateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SslCertificateDetail])
                res.ssl_certificate_detail = out

        return res

    
    def get_ssl_certificates(self, request: operations.GetSslCertificatesRequest) -> operations.GetSslCertificatesResponse:
        r"""Overview of SSL certificates
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sslcertificates"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSslCertificatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SslCertificate]])
                res.ssl_certificates = out

        return res

    