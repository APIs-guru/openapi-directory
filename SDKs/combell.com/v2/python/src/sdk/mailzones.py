import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class MailZones:
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

    
    def configure_alias(self, request: operations.ConfigureAliasRequest) -> operations.ConfigureAliasResponse:
        r"""Configure a alias
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mailzones/{domainName}/aliases/{emailAddress}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfigureAliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequestResponse])
                res.bad_request_response = out

        return res

    
    def configure_anti_spam(self, request: operations.ConfigureAntiSpamRequest) -> operations.ConfigureAntiSpamResponse:
        r"""Configure anti-spam for mail zone
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mailzones/{domainName}/antispam", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfigureAntiSpamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def configure_smtp_domain(self, request: operations.ConfigureSMTPDomainRequest) -> operations.ConfigureSMTPDomainResponse:
        r"""Configure an extra smtp domain
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mailzones/{domainName}/smtpdomains/{hostname}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfigureSMTPDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequestResponse])
                res.bad_request_response = out

        return res

    
    def create_alias(self, request: operations.CreateAliasRequest) -> operations.CreateAliasResponse:
        r"""Create a new alias
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mailzones/{domainName}/aliases", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequestResponse])
                res.bad_request_response = out

        return res

    
    def create_catch_all(self, request: operations.CreateCatchAllRequest) -> operations.CreateCatchAllResponse:
        r"""Create a catch-all on the mail zone
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mailzones/{domainName}/catchall", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCatchAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            

        return res

    
    def create_smtp_domain(self, request: operations.CreateSMTPDomainRequest) -> operations.CreateSMTPDomainResponse:
        r"""Create an extra smtp domain
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mailzones/{domainName}/smtpdomains", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSMTPDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequestResponse])
                res.bad_request_response = out

        return res

    
    def delete_alias(self, request: operations.DeleteAliasRequest) -> operations.DeleteAliasResponse:
        r"""Delete a alias
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mailzones/{domainName}/aliases/{emailAddress}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def delete_catch_all(self, request: operations.DeleteCatchAllRequest) -> operations.DeleteCatchAllResponse:
        r"""Delete a catch-all on the mail zone
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mailzones/{domainName}/catchall/{emailAddress}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCatchAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_smtp_domain(self, request: operations.DeleteSMTPDomainRequest) -> operations.DeleteSMTPDomainResponse:
        r"""Delete an extra smtp domain
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mailzones/{domainName}/smtpdomains/{hostname}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSMTPDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def get_mail_zone(self, request: operations.GetMailZoneRequest) -> operations.GetMailZoneResponse:
        r"""Get the mail zone.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mailzones/{domainName}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMailZoneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MailZone])
                res.mail_zone = out

        return res

    