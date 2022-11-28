import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class SslCertificateRequests:
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

    
    def add_ssl_certificate_request(self, request: operations.AddSslCertificateRequestRequest) -> operations.AddSslCertificateRequestResponse:
        r"""Add a SSL certificate request
        Executing this method causes the purchase of a paying product.<br />
        Log on to our website to see your current (renewal) prices or contact our Sales department.<br />
        Please note that promotional pricing does not apply for purchases made through our API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sslcertificaterequests"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddSslCertificateRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            

        return res

    
    def get_ssl_certificate_request(self, request: operations.GetSslCertificateRequestRequest) -> operations.GetSslCertificateRequestResponse:
        r"""Detail of a SSL certificate request
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sslcertificaterequests/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSslCertificateRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SslCertificateRequestDetail])
                res.ssl_certificate_request_detail = out
        elif r.status_code == 303:
            res.headers = r.headers
            
        elif r.status_code == 410:
            pass

        return res

    
    def get_ssl_certificate_requests(self, request: operations.GetSslCertificateRequestsRequest) -> operations.GetSslCertificateRequestsResponse:
        r"""Overview of SSL certificate requests
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sslcertificaterequests"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSslCertificateRequestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SslCertificateRequest]])
                res.ssl_certificate_requests = out

        return res

    
    def verify_ssl_certificate_request_domain_validations(self, request: operations.VerifySslCertificateRequestDomainValidationsRequest) -> operations.VerifySslCertificateRequestDomainValidationsResponse:
        r"""Verify the SSL certificate request domain validations
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sslcertificaterequests/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VerifySslCertificateRequestDomainValidationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 303:
            res.headers = r.headers
            
        elif r.status_code == 410:
            pass

        return res

    