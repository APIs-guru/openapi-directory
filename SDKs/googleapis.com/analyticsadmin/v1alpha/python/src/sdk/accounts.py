import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Accounts:
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

    
    def analyticsadmin_accounts_list(self, request: operations.AnalyticsadminAccountsListRequest) -> operations.AnalyticsadminAccountsListResponse:
        r"""Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: \"trashed\") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1alpha/accounts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminAccountsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListAccountsResponse])
                res.google_analytics_admin_v1alpha_list_accounts_response = out

        return res

    
    def analyticsadmin_accounts_provision_account_ticket(self, request: operations.AnalyticsadminAccountsProvisionAccountTicketRequest) -> operations.AnalyticsadminAccountsProvisionAccountTicketResponse:
        r"""Requests a ticket for creating an account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1alpha/accounts:provisionAccountTicket"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminAccountsProvisionAccountTicketResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse])
                res.google_analytics_admin_v1alpha_provision_account_ticket_response = out

        return res

    
    def analyticsadmin_accounts_search_change_history_events(self, request: operations.AnalyticsadminAccountsSearchChangeHistoryEventsRequest) -> operations.AnalyticsadminAccountsSearchChangeHistoryEventsResponse:
        r"""Searches through all changes to an account or its children given the specified set of filters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{account}:searchChangeHistoryEvents", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminAccountsSearchChangeHistoryEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse])
                res.google_analytics_admin_v1alpha_search_change_history_events_response = out

        return res

    