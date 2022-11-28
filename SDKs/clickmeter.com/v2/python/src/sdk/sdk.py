

import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://apiv2.clickmeter.com:80",
	"https://apiv2.clickmeter.com:80",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def account_delete_domain_whitelist(self, request: operations.AccountDeleteDomainWhitelistRequest) -> operations.AccountDeleteDomainWhitelistResponse:
        r"""Delete an domain entry
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/domainwhitelist/{whitelistId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountDeleteDomainWhitelistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingDomainWhitelistEntry])
                res.api_core_dto_accounting_domain_whitelist_entry = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingDomainWhitelistEntry])
                res.api_core_dto_accounting_domain_whitelist_entry = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def account_delete_guest(self, request: operations.AccountDeleteGuestRequest) -> operations.AccountDeleteGuestResponse:
        r"""Delete a guest
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/guests/{guestId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountDeleteGuestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def account_delete_ip_blacklist(self, request: operations.AccountDeleteIPBlacklistRequest) -> operations.AccountDeleteIPBlacklistResponse:
        r"""Delete an ip blacklist entry
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/ipblacklist/{blacklistId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountDeleteIPBlacklistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingIPBlacklistEntry])
                res.api_core_dto_accounting_ip_blacklist_entry = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingIPBlacklistEntry])
                res.api_core_dto_accounting_ip_blacklist_entry = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def account_get(self) -> operations.AccountGetResponse:
        r"""Retrieve current account data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingUser])
                res.api_core_dto_accounting_user = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingUser])
                res.api_core_dto_accounting_user = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def account_get_domain_whitelist(self, request: operations.AccountGetDomainWhitelistRequest) -> operations.AccountGetDomainWhitelistResponse:
        r"""Retrieve list of a domains allowed to redirect in DDU mode
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/domainwhitelist"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountGetDomainWhitelistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoAccountingDomainWhitelistEntry])
                res.api_core_responses_entities_response_api_core_dto_accounting_domain_whitelist_entry_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoAccountingDomainWhitelistEntry])
                res.api_core_responses_entities_response_api_core_dto_accounting_domain_whitelist_entry_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def account_get_guest(self, request: operations.AccountGetGuestRequest) -> operations.AccountGetGuestResponse:
        r"""Retrieve a guest
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/guests/{guestId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountGetGuestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingGuest])
                res.api_core_dto_accounting_guest = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingGuest])
                res.api_core_dto_accounting_guest = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def account_get_guests(self, request: operations.AccountGetGuestsRequest) -> operations.AccountGetGuestsResponse:
        r"""Retrieve list of a guest
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/guests"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountGetGuestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def account_get_guests_count(self, request: operations.AccountGetGuestsCountRequest) -> operations.AccountGetGuestsCountResponse:
        r"""Retrieve count of guests
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/guests/count"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountGetGuestsCountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def account_get_ip_blacklist(self, request: operations.AccountGetIPBlacklistRequest) -> operations.AccountGetIPBlacklistResponse:
        r"""Retrieve list of a ip to exclude from event tracking
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/ipblacklist"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountGetIPBlacklistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoAccountingIPBlacklistEntry])
                res.api_core_responses_entities_response_api_core_dto_accounting_ip_blacklist_entry_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoAccountingIPBlacklistEntry])
                res.api_core_responses_entities_response_api_core_dto_accounting_ip_blacklist_entry_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def account_get_permissions(self, request: operations.AccountGetPermissionsRequest) -> operations.AccountGetPermissionsResponse:
        r"""Retrieve permissions for a guest
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/guests/{guestId}/permissions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountGetPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoGrantsGrant])
                res.api_core_responses_entities_response_api_core_dto_grants_grant_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoGrantsGrant])
                res.api_core_responses_entities_response_api_core_dto_grants_grant_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def account_get_permissions_count(self, request: operations.AccountGetPermissionsCountRequest) -> operations.AccountGetPermissionsCountResponse:
        r"""Retrieve count of the permissions for a guest
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/guests/{guestId}/permissions/count", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountGetPermissionsCountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def account_get_plan(self) -> operations.AccountGetPlanResponse:
        r"""Retrieve current account plan
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/plan"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountGetPlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingPlan])
                res.api_core_dto_accounting_plan = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingPlan])
                res.api_core_dto_accounting_plan = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def account_patch_permissions(self, request: operations.AccountPatchPermissionsRequest) -> operations.AccountPatchPermissionsResponse:
        r"""Change the permission on a shared object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/guests/{guestId}/{type}/permissions/patch", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountPatchPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def account_post(self, request: operations.AccountPostRequest) -> operations.AccountPostResponse:
        r"""Update current account data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingUser])
                res.api_core_dto_accounting_user = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingUser])
                res.api_core_dto_accounting_user = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def account_post_guest(self, request: operations.AccountPostGuestRequest) -> operations.AccountPostGuestResponse:
        r"""Update a guest
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/guests/{guestId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountPostGuestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingGuest])
                res.api_core_dto_accounting_guest = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingGuest])
                res.api_core_dto_accounting_guest = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def account_put_domain_whitelist(self, request: operations.AccountPutDomainWhitelistRequest) -> operations.AccountPutDomainWhitelistResponse:
        r"""Create an domain entry
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/domainwhitelist"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountPutDomainWhitelistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingDomainWhitelistEntry])
                res.api_core_dto_accounting_domain_whitelist_entry = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingDomainWhitelistEntry])
                res.api_core_dto_accounting_domain_whitelist_entry = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def account_put_guest(self, request: operations.AccountPutGuestRequest) -> operations.AccountPutGuestResponse:
        r"""Create a guest
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/guests"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountPutGuestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingGuest])
                res.api_core_dto_accounting_guest = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingGuest])
                res.api_core_dto_accounting_guest = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def account_put_ip_blacklist(self, request: operations.AccountPutIPBlacklistRequest) -> operations.AccountPutIPBlacklistResponse:
        r"""Create an ip blacklist entry
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/ipblacklist"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountPutIPBlacklistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingIPBlacklistEntry])
                res.api_core_dto_accounting_ip_blacklist_entry = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingIPBlacklistEntry])
                res.api_core_dto_accounting_ip_blacklist_entry = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def aggregated_get_conversions_summary(self, request: operations.AggregatedGetConversionsSummaryRequest) -> operations.AggregatedGetConversionsSummaryResponse:
        r"""Retrieve statistics about a subset of conversions for a timeframe with conversions data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aggregated/summary/conversions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AggregatedGetConversionsSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAggregatedAggregatedSummaryResult])
                res.api_core_dto_aggregated_aggregated_summary_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAggregatedAggregatedSummaryResult])
                res.api_core_dto_aggregated_aggregated_summary_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def aggregated_get_datapoints_summary(self, request: operations.AggregatedGetDatapointsSummaryRequest) -> operations.AggregatedGetDatapointsSummaryResponse:
        r"""Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aggregated/summary/datapoints"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AggregatedGetDatapointsSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAggregatedAggregatedSummaryResult])
                res.api_core_dto_aggregated_aggregated_summary_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAggregatedAggregatedSummaryResult])
                res.api_core_dto_aggregated_aggregated_summary_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def aggregated_get_groups_summary(self, request: operations.AggregatedGetGroupsSummaryRequest) -> operations.AggregatedGetGroupsSummaryResponse:
        r"""Retrieve statistics about a subset of groups for a timeframe with groups data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aggregated/summary/groups"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AggregatedGetGroupsSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAggregatedAggregatedSummaryResult])
                res.api_core_dto_aggregated_aggregated_summary_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAggregatedAggregatedSummaryResult])
                res.api_core_dto_aggregated_aggregated_summary_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def aggregated_get_statistics_list(self, request: operations.AggregatedGetStatisticsListRequest) -> operations.AggregatedGetStatisticsListResponse:
        r"""Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aggregated/list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AggregatedGetStatisticsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult])
                res.api_core_responses_entities_response_api_core_dto_aggregated_aggregated_result_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult])
                res.api_core_responses_entities_response_api_core_dto_aggregated_aggregated_result_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def aggregated_get_statistics_single(self, request: operations.AggregatedGetStatisticsSingleRequest) -> operations.AggregatedGetStatisticsSingleResponse:
        r"""Retrieve statistics about this customer for a timeframe
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aggregated"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AggregatedGetStatisticsSingleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAggregatedAggregatedResult])
                res.api_core_dto_aggregated_aggregated_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAggregatedAggregatedResult])
                res.api_core_dto_aggregated_aggregated_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def click_stream_get(self, request: operations.ClickStreamGetRequest) -> operations.ClickStreamGetResponse:
        r"""Retrieve the latest list of events of this account. Limited to last 100.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/clickstream"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ClickStreamGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoClickStreamHit])
                res.api_core_responses_entities_response_api_core_dto_click_stream_hit_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoClickStreamHit])
                res.api_core_responses_entities_response_api_core_dto_click_stream_hit_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def conversions_count(self, request: operations.ConversionsCountRequest) -> operations.ConversionsCountResponse:
        r"""Retrieve a count of conversions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/conversions/count"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ConversionsCountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def conversions_delete(self, request: operations.ConversionsDeleteRequest) -> operations.ConversionsDeleteResponse:
        r"""Delete conversion specified by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversions/{conversionId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ConversionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def conversions_get(self, request: operations.ConversionsGetRequest) -> operations.ConversionsGetResponse:
        r"""Retrieve a list of conversions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/conversions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ConversionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def conversions_get_datapoints(self, request: operations.ConversionsGetDatapointsRequest) -> operations.ConversionsGetDatapointsResponse:
        r"""Retrieve a list of datapoints connected to this conversion
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversions/{conversionId}/datapoints", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ConversionsGetDatapointsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def conversions_get_datapoints_count(self, request: operations.ConversionsGetDatapointsCountRequest) -> operations.ConversionsGetDatapointsCountResponse:
        r"""Retrieve a count of datapoints connected to this conversion
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversions/{conversionId}/datapoints/count", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ConversionsGetDatapointsCountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def conversions_get_hits(self, request: operations.ConversionsGetHitsRequest) -> operations.ConversionsGetHitsResponse:
        r"""Retrieve the list of events related to this conversion.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversions/{conversionId}/hits", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ConversionsGetHitsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoClickStreamHitListPage])
                res.api_core_dto_click_stream_hit_list_page = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoClickStreamHitListPage])
                res.api_core_dto_click_stream_hit_list_page = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def conversions_get_statistics_all_list(self, request: operations.ConversionsGetStatisticsAllListRequest) -> operations.ConversionsGetStatisticsAllListResponse:
        r"""Retrieve statistics about this customer for a timeframe related to a subset of conversions grouped by some temporal entity (day/week/month)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/conversions/aggregated/list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ConversionsGetStatisticsAllListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult])
                res.api_core_responses_entities_response_api_core_dto_aggregated_aggregated_result_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult])
                res.api_core_responses_entities_response_api_core_dto_aggregated_aggregated_result_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def conversions_get_statistics_list(self, request: operations.ConversionsGetStatisticsListRequest) -> operations.ConversionsGetStatisticsListResponse:
        r"""Retrieve statistics about this conversion for a timeframe grouped by some temporal entity (day/week/month)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversions/{conversionId}/aggregated/list", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ConversionsGetStatisticsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult])
                res.api_core_responses_entities_response_api_core_dto_aggregated_aggregated_result_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult])
                res.api_core_responses_entities_response_api_core_dto_aggregated_aggregated_result_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def conversions_get_statistics_single(self, request: operations.ConversionsGetStatisticsSingleRequest) -> operations.ConversionsGetStatisticsSingleResponse:
        r"""Retrieve statistics about this conversion for a timeframe
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversions/{conversionId}/aggregated", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ConversionsGetStatisticsSingleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAggregatedAggregatedResult])
                res.api_core_dto_aggregated_aggregated_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAggregatedAggregatedResult])
                res.api_core_dto_aggregated_aggregated_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def conversions_get_tops(self, request: operations.ConversionsGetTopsRequest) -> operations.ConversionsGetTopsResponse:
        r"""Retrieve a top report connected to this conversion
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversions/{conversionId}/reports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ConversionsGetTopsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoTopsTop])
                res.api_core_dto_tops_top = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoTopsTop])
                res.api_core_dto_tops_top = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def conversions_patch(self, request: operations.ConversionsPatchRequest) -> operations.ConversionsPatchResponse:
        r"""Modify the association between a conversion and a datapoint
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversions/{conversionId}/datapoints/patch", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConversionsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def conversions_patch_notes(self, request: operations.ConversionsPatchNotesRequest) -> operations.ConversionsPatchNotesResponse:
        r"""Fast patch the \"notes\" field of a conversion
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversions/{conversionId}/notes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConversionsPatchNotesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def conversions_post(self, request: operations.ConversionsPostRequest) -> operations.ConversionsPostResponse:
        r"""Update conversion specified by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversions/{conversionId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConversionsPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def conversions_put(self, request: operations.ConversionsPutRequest) -> operations.ConversionsPutResponse:
        r"""Create a conversion
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/conversions"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConversionsPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def data_points_count(self, request: operations.DataPointsCountRequest) -> operations.DataPointsCountResponse:
        r"""Count the datapoints associated to the user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/datapoints/count"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataPointsCountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def data_points_delete(self, request: operations.DataPointsDeleteRequest) -> operations.DataPointsDeleteResponse:
        r"""Delete a datapoint
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/datapoints/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DataPointsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def data_points_get(self, request: operations.DataPointsGetRequest) -> operations.DataPointsGetResponse:
        r"""List of all the datapoints associated to the user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/datapoints"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataPointsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def data_points_get_hits(self, request: operations.DataPointsGetHitsRequest) -> operations.DataPointsGetHitsResponse:
        r"""Retrieve the list of events related to this datapoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/datapoints/{id}/hits", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataPointsGetHitsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoClickStreamHitListPage])
                res.api_core_dto_click_stream_hit_list_page = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoClickStreamHitListPage])
                res.api_core_dto_click_stream_hit_list_page = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def data_points_get_statistics_aggregated_single(self, request: operations.DataPointsGetStatisticsAggregatedSingleRequest) -> operations.DataPointsGetStatisticsAggregatedSingleResponse:
        r"""Retrieve statistics about this customer for a timeframe by groups
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/datapoints/aggregated"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataPointsGetStatisticsAggregatedSingleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAggregatedAggregatedResult])
                res.api_core_dto_aggregated_aggregated_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAggregatedAggregatedResult])
                res.api_core_dto_aggregated_aggregated_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def data_points_get_statistics_all_list(self, request: operations.DataPointsGetStatisticsAllListRequest) -> operations.DataPointsGetStatisticsAllListResponse:
        r"""Retrieve statistics about all datapoints of this customer for a timeframe grouped by some temporal entity (day/week/month)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/datapoints/aggregated/list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataPointsGetStatisticsAllListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult])
                res.api_core_responses_entities_response_api_core_dto_aggregated_aggregated_result_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult])
                res.api_core_responses_entities_response_api_core_dto_aggregated_aggregated_result_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def data_points_get_statistics_list(self, request: operations.DataPointsGetStatisticsListRequest) -> operations.DataPointsGetStatisticsListResponse:
        r"""Retrieve statistics about this datapoint for a timeframe grouped by some temporal entity (day/week/month)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/datapoints/{id}/aggregated/list", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataPointsGetStatisticsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult])
                res.api_core_responses_entities_response_api_core_dto_aggregated_aggregated_result_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult])
                res.api_core_responses_entities_response_api_core_dto_aggregated_aggregated_result_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def data_points_get_statistics_single(self, request: operations.DataPointsGetStatisticsSingleRequest) -> operations.DataPointsGetStatisticsSingleResponse:
        r"""Retrieve statistics about this datapoint for a timeframe
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/datapoints/{id}/aggregated", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataPointsGetStatisticsSingleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAggregatedAggregatedResult])
                res.api_core_dto_aggregated_aggregated_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAggregatedAggregatedResult])
                res.api_core_dto_aggregated_aggregated_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def data_points_get_tops(self, request: operations.DataPointsGetTopsRequest) -> operations.DataPointsGetTopsResponse:
        r"""Retrieve a top report connected to this datapoint
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/datapoints/{id}/reports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataPointsGetTopsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoTopsTop])
                res.api_core_dto_tops_top = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoTopsTop])
                res.api_core_dto_tops_top = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def data_points_patch_favourite(self, request: operations.DataPointsPatchFavouriteRequest) -> operations.DataPointsPatchFavouriteResponse:
        r"""Fast switch the \"favourite\" field of a datapoint
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/datapoints/{id}/favourite", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DataPointsPatchFavouriteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def data_points_patch_notes(self, request: operations.DataPointsPatchNotesRequest) -> operations.DataPointsPatchNotesResponse:
        r"""Fast patch the \"notes\" field of a datapoint
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/datapoints/{id}/notes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DataPointsPatchNotesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def domains_count(self, request: operations.DomainsCountRequest) -> operations.DomainsCountResponse:
        r"""Retrieve count of domains
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/domains/count"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsCountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def domains_delete(self, request: operations.DomainsDeleteRequest) -> operations.DomainsDeleteResponse:
        r"""Delete a domain
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def domains_get(self, request: operations.DomainsGetRequest) -> operations.DomainsGetResponse:
        r"""Retrieve a list of domains
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/domains"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def domains_put(self, request: operations.DomainsPutRequest) -> operations.DomainsPutResponse:
        r"""Create a domain
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/domains"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def domains_update(self, request: operations.DomainsUpdateRequest) -> operations.DomainsUpdateResponse:
        r"""Update a domain
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_conversions_conversion_id_(self, request: operations.GetConversionsConversionIDRequest) -> operations.GetConversionsConversionIDResponse:
        r"""Retrieve conversion specified by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversions/{conversionId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConversionsConversionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoConversionsConversion])
                res.api_core_dto_conversions_conversion = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoConversionsConversion])
                res.api_core_dto_conversions_conversion = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_datapoints_id_(self, request: operations.GetDatapointsIDRequest) -> operations.GetDatapointsIDResponse:
        r"""Get a datapoint
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/datapoints/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatapointsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoDatapointsDatapoint])
                res.api_core_dto_datapoints_datapoint = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoDatapointsDatapoint])
                res.api_core_dto_datapoints_datapoint = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_domains_id_(self, request: operations.GetDomainsIDRequest) -> operations.GetDomainsIDResponse:
        r"""Get a domain
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoDomainsDomain])
                res.api_core_dto_domains_domain = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoDomainsDomain])
                res.api_core_dto_domains_domain = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_groups_id_(self, request: operations.GetGroupsIDRequest) -> operations.GetGroupsIDResponse:
        r"""Get a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoGroupsGroup])
                res.api_core_dto_groups_group = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoGroupsGroup])
                res.api_core_dto_groups_group = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_retargeting_id_(self, request: operations.GetRetargetingIDRequest) -> operations.GetRetargetingIDResponse:
        r"""Get a retargeting script object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/retargeting/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRetargetingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoRetargetingRetargetingScript])
                res.api_core_dto_retargeting_retargeting_script = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoRetargetingRetargetingScript])
                res.api_core_dto_retargeting_retargeting_script = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_tags_tag_id_(self, request: operations.GetTagsTagIDRequest) -> operations.GetTagsTagIDResponse:
        r"""Retrieve a tag
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{tagId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagsTagIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoTagsTag])
                res.api_core_dto_tags_tag = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoTagsTag])
                res.api_core_dto_tags_tag = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def groups_count(self, request: operations.GroupsCountRequest) -> operations.GroupsCountResponse:
        r"""Count the groups associated to the user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/groups/count"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsCountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def groups_delete(self, request: operations.GroupsDeleteRequest) -> operations.GroupsDeleteResponse:
        r"""Delete group specified by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def groups_get(self, request: operations.GroupsGetRequest) -> operations.GroupsGetResponse:
        r"""List of all the groups associated to the user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/groups"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def groups_get_datapoints(self, request: operations.GroupsGetDatapointsRequest) -> operations.GroupsGetDatapointsResponse:
        r"""List of all the datapoints associated to the user in this group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{id}/datapoints", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsGetDatapointsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def groups_get_datapoints_count(self, request: operations.GroupsGetDatapointsCountRequest) -> operations.GroupsGetDatapointsCountResponse:
        r"""Count the datapoints associated to the user in this group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{id}/datapoints/count", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsGetDatapointsCountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def groups_get_datapoints_summary(self, request: operations.GroupsGetDatapointsSummaryRequest) -> operations.GroupsGetDatapointsSummaryResponse:
        r"""Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{id}/aggregated/summary", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsGetDatapointsSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAggregatedAggregatedSummaryResult])
                res.api_core_dto_aggregated_aggregated_summary_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAggregatedAggregatedSummaryResult])
                res.api_core_dto_aggregated_aggregated_summary_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def groups_get_hits(self, request: operations.GroupsGetHitsRequest) -> operations.GroupsGetHitsResponse:
        r"""Retrieve the list of events related to this group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{id}/hits", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsGetHitsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoClickStreamHitListPage])
                res.api_core_dto_click_stream_hit_list_page = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoClickStreamHitListPage])
                res.api_core_dto_click_stream_hit_list_page = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def groups_get_statistics_aggregated_single(self, request: operations.GroupsGetStatisticsAggregatedSingleRequest) -> operations.GroupsGetStatisticsAggregatedSingleResponse:
        r"""Retrieve statistics about this customer for a timeframe by groups
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/groups/aggregated"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsGetStatisticsAggregatedSingleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAggregatedAggregatedResult])
                res.api_core_dto_aggregated_aggregated_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAggregatedAggregatedResult])
                res.api_core_dto_aggregated_aggregated_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def groups_get_statistics_all_list(self, request: operations.GroupsGetStatisticsAllListRequest) -> operations.GroupsGetStatisticsAllListResponse:
        r"""Retrieve statistics about all groups of this customer for a timeframe grouped by some temporal entity (day/week/month)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/groups/aggregated/list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsGetStatisticsAllListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult])
                res.api_core_responses_entities_response_api_core_dto_aggregated_aggregated_result_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult])
                res.api_core_responses_entities_response_api_core_dto_aggregated_aggregated_result_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def groups_get_statistics_list(self, request: operations.GroupsGetStatisticsListRequest) -> operations.GroupsGetStatisticsListResponse:
        r"""Retrieve statistics about this group for a timeframe grouped by some temporal entity (day/week/month)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{id}/aggregated/list", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsGetStatisticsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult])
                res.api_core_responses_entities_response_api_core_dto_aggregated_aggregated_result_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult])
                res.api_core_responses_entities_response_api_core_dto_aggregated_aggregated_result_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def groups_get_statistics_single(self, request: operations.GroupsGetStatisticsSingleRequest) -> operations.GroupsGetStatisticsSingleResponse:
        r"""Retrieve statistics about this group for a timeframe
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{id}/aggregated", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsGetStatisticsSingleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAggregatedAggregatedResult])
                res.api_core_dto_aggregated_aggregated_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAggregatedAggregatedResult])
                res.api_core_dto_aggregated_aggregated_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def groups_get_tops(self, request: operations.GroupsGetTopsRequest) -> operations.GroupsGetTopsResponse:
        r"""Retrieve a top report connected to this group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{id}/reports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsGetTopsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoTopsTop])
                res.api_core_dto_tops_top = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoTopsTop])
                res.api_core_dto_tops_top = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def groups_patch_favourite(self, request: operations.GroupsPatchFavouriteRequest) -> operations.GroupsPatchFavouriteResponse:
        r"""Fast switch the \"favourite\" field of a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{id}/favourite", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsPatchFavouriteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def groups_patch_notes(self, request: operations.GroupsPatchNotesRequest) -> operations.GroupsPatchNotesResponse:
        r"""Fast patch the \"notes\" field of a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/groups/{id}/notes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GroupsPatchNotesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def hits_get_hits(self, request: operations.HitsGetHitsRequest) -> operations.HitsGetHitsResponse:
        r"""Retrieve the list of events related to this account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/hits"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HitsGetHitsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoClickStreamHitListPage])
                res.api_core_dto_click_stream_hit_list_page = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoClickStreamHitListPage])
                res.api_core_dto_click_stream_hit_list_page = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def me_get_me(self) -> operations.MeGetMeResponse:
        r"""Retrieve current account data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MeGetMeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingUser])
                res.api_core_dto_accounting_user = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingUser])
                res.api_core_dto_accounting_user = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def me_get_me_plan(self) -> operations.MeGetMePlanResponse:
        r"""Retrieve current account plan
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/plan"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MeGetMePlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingPlan])
                res.api_core_dto_accounting_plan = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoAccountingPlan])
                res.api_core_dto_accounting_plan = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_account_guests_guest_id_type_permissions_patch(self, request: operations.PostAccountGuestsGuestIDTypePermissionsPatchRequest) -> operations.PostAccountGuestsGuestIDTypePermissionsPatchResponse:
        r"""Change the permission on a shared object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/guests/{guestId}/{type}/permissions/patch", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAccountGuestsGuestIDTypePermissionsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def reports_get(self, request: operations.ReportsGetRequest) -> operations.ReportsGetResponse:
        r"""Retrieve a top report
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/reports"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoTopsTop])
                res.api_core_dto_tops_top = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreDtoTopsTop])
                res.api_core_dto_tops_top = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def retargeting_count(self) -> operations.RetargetingCountResponse:
        r"""Retrieve count of retargeting scripts
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/retargeting/count"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RetargetingCountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def retargeting_delete(self, request: operations.RetargetingDeleteRequest) -> operations.RetargetingDeleteResponse:
        r"""Deletes a retargeting script (and remove associations)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/retargeting/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RetargetingDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def retargeting_get(self, request: operations.RetargetingGetRequest) -> operations.RetargetingGetResponse:
        r"""List of all the retargeting scripts associated to the user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/retargeting"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetargetingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def retargeting_get_datapoints(self, request: operations.RetargetingGetDatapointsRequest) -> operations.RetargetingGetDatapointsResponse:
        r"""List of all the datapoints associated to the retargeting script.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/retargeting/{id}/datapoints", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetargetingGetDatapointsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def retargeting_get_datapoints_count(self, request: operations.RetargetingGetDatapointsCountRequest) -> operations.RetargetingGetDatapointsCountResponse:
        r"""Count the datapoints associated to the retargeting script.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/retargeting/{id}/datapoints/count", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetargetingGetDatapointsCountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def retargeting_post(self, request: operations.RetargetingPostRequest) -> operations.RetargetingPostResponse:
        r"""Updates a retargeting script
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/retargeting/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetargetingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def retargeting_put(self, request: operations.RetargetingPutRequest) -> operations.RetargetingPutResponse:
        r"""Creates a retargeting script
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/retargeting"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetargetingPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def tags_count(self, request: operations.TagsCountRequest) -> operations.TagsCountResponse:
        r"""List of all the groups associated to the user filtered by this tag.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tags/count"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagsCountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def tags_delete(self, request: operations.TagsDeleteRequest) -> operations.TagsDeleteResponse:
        r"""Delete a tag
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{tagId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TagsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def tags_delete_related_datapoints(self, request: operations.TagsDeleteRelatedDatapointsRequest) -> operations.TagsDeleteRelatedDatapointsResponse:
        r"""Delete the association of this tag with all datapoints
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{tagId}/datapoints", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TagsDeleteRelatedDatapointsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def tags_delete_related_groups(self, request: operations.TagsDeleteRelatedGroupsRequest) -> operations.TagsDeleteRelatedGroupsResponse:
        r"""Delete the association of this tag with all groups
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{tagId}/groups", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TagsDeleteRelatedGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def tags_get(self, request: operations.TagsGetRequest) -> operations.TagsGetResponse:
        r"""List of all the groups associated to the user filtered by this tag.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tags"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def tags_get_datapoints(self, request: operations.TagsGetDatapointsRequest) -> operations.TagsGetDatapointsResponse:
        r"""List of all the datapoints associated to the user filtered by this tag
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{tagId}/datapoints", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagsGetDatapointsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def tags_get_datapoints_count(self, request: operations.TagsGetDatapointsCountRequest) -> operations.TagsGetDatapointsCountResponse:
        r"""Count the datapoints associated to the user filtered by this tag
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{tagId}/datapoints/count", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagsGetDatapointsCountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def tags_get_groups(self, request: operations.TagsGetGroupsRequest) -> operations.TagsGetGroupsResponse:
        r"""List of all the groups associated to the user filtered by this tag.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{tagId}/groups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagsGetGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_ = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def tags_get_groups_count(self, request: operations.TagsGetGroupsCountRequest) -> operations.TagsGetGroupsCountResponse:
        r"""Count the groups associated to the user filtered by this tag
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{tagId}/groups/count", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagsGetGroupsCountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesCountResponce])
                res.api_core_responses_count_responce = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def tags_patch_data_point(self, request: operations.TagsPatchDataPointRequest) -> operations.TagsPatchDataPointResponse:
        r"""Associate/Deassociate a tag with a datapoint
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{tagId}/datapoints/patch", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagsPatchDataPointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def tags_patch_group(self, request: operations.TagsPatchGroupRequest) -> operations.TagsPatchGroupResponse:
        r"""Associate/Deassociate a tag with a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{tagId}/groups/patch", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagsPatchGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def tags_patch_tag_name(self, request: operations.TagsPatchTagNameRequest) -> operations.TagsPatchTagNameResponse:
        r"""Fast patch a tag name
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{tagId}/name", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagsPatchTagNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def tags_put(self, request: operations.TagsPutRequest) -> operations.TagsPutResponse:
        r"""Create a tag
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tags"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagsPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APICoreResponsesEntityURISystemInt64])
                res.api_core_responses_entity_uri_system_int64_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    