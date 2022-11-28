import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Domains:
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

    
    def configure_domain(self, request: operations.ConfigureDomainRequest) -> operations.ConfigureDomainResponse:
        r"""Edit domain name renew state
        Allowed if can_toggle_renew is true on the domain detail:<br /><ul><li>If there are no unpaid invoices for the domain name anymore.</li><li>If the renewal won't start within 1 month.</li></ul>
        Allowed if the requesting user has the finance role.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/{domainName}/renew", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfigureDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def domains(self, request: operations.DomainsRequest) -> operations.DomainsResponse:
        r"""Overviews of domains
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/domains"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Domain]])
                res.domains = out

        return res

    
    def get_domains_domain_name_(self, request: operations.GetDomainsDomainNameRequest) -> operations.GetDomainsDomainNameResponse:
        r"""Details of a domain
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/{domainName}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainsDomainNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DomainDetail])
                res.domain_detail = out

        return res

    
    def post_domains_registrations(self, request: operations.PostDomainsRegistrationsRequest) -> operations.PostDomainsRegistrationsResponse:
        r"""Register a domain
        Registers an available domain.<br />Domain names with extension '.ca' are only available for registrants with country code 'CA'.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/domains/registrations"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDomainsRegistrationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass

        return res

    
    def put_domains_domain_name_nameservers(self, request: operations.PutDomainsDomainNameNameserversRequest) -> operations.PutDomainsDomainNameNameserversResponse:
        r"""Edit domain name servers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/{domainName}/nameservers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutDomainsDomainNameNameserversResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    