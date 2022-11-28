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

    
    def adsensehost_accounts_adclients_get(self, request: operations.AdsensehostAccountsAdclientsGetRequest) -> operations.AdsensehostAccountsAdclientsGetResponse:
        r"""Get information about one of the ad clients in the specified publisher's AdSense account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/adclients/{adClientId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsensehostAccountsAdclientsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdClient])
                res.ad_client = out

        return res

    
    def adsensehost_accounts_adclients_list(self, request: operations.AdsensehostAccountsAdclientsListRequest) -> operations.AdsensehostAccountsAdclientsListResponse:
        r"""List all hosted ad clients in the specified hosted account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/adclients", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsensehostAccountsAdclientsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdClients])
                res.ad_clients = out

        return res

    
    def adsensehost_accounts_adunits_delete(self, request: operations.AdsensehostAccountsAdunitsDeleteRequest) -> operations.AdsensehostAccountsAdunitsDeleteResponse:
        r"""Delete the specified ad unit from the specified publisher AdSense account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsensehostAccountsAdunitsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdUnit])
                res.ad_unit = out

        return res

    
    def adsensehost_accounts_adunits_get(self, request: operations.AdsensehostAccountsAdunitsGetRequest) -> operations.AdsensehostAccountsAdunitsGetResponse:
        r"""Get the specified host ad unit in this AdSense account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsensehostAccountsAdunitsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdUnit])
                res.ad_unit = out

        return res

    
    def adsensehost_accounts_adunits_get_ad_code(self, request: operations.AdsensehostAccountsAdunitsGetAdCodeRequest) -> operations.AdsensehostAccountsAdunitsGetAdCodeResponse:
        r"""Get ad code for the specified ad unit, attaching the specified host custom channels.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}/adcode", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsensehostAccountsAdunitsGetAdCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdCode])
                res.ad_code = out

        return res

    
    def adsensehost_accounts_adunits_insert(self, request: operations.AdsensehostAccountsAdunitsInsertRequest) -> operations.AdsensehostAccountsAdunitsInsertResponse:
        r"""Insert the supplied ad unit into the specified publisher AdSense account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/adclients/{adClientId}/adunits", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsensehostAccountsAdunitsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdUnit])
                res.ad_unit = out

        return res

    
    def adsensehost_accounts_adunits_list(self, request: operations.AdsensehostAccountsAdunitsListRequest) -> operations.AdsensehostAccountsAdunitsListResponse:
        r"""List all ad units in the specified publisher's AdSense account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/adclients/{adClientId}/adunits", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsensehostAccountsAdunitsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdUnits])
                res.ad_units = out

        return res

    
    def adsensehost_accounts_adunits_patch(self, request: operations.AdsensehostAccountsAdunitsPatchRequest) -> operations.AdsensehostAccountsAdunitsPatchResponse:
        r"""Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/adclients/{adClientId}/adunits", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsensehostAccountsAdunitsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdUnit])
                res.ad_unit = out

        return res

    
    def adsensehost_accounts_adunits_update(self, request: operations.AdsensehostAccountsAdunitsUpdateRequest) -> operations.AdsensehostAccountsAdunitsUpdateResponse:
        r"""Update the supplied ad unit in the specified publisher AdSense account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/adclients/{adClientId}/adunits", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsensehostAccountsAdunitsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdUnit])
                res.ad_unit = out

        return res

    
    def adsensehost_accounts_get(self, request: operations.AdsensehostAccountsGetRequest) -> operations.AdsensehostAccountsGetResponse:
        r"""Get information about the selected associated AdSense account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsensehostAccountsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Account])
                res.account = out

        return res

    
    def adsensehost_accounts_list(self, request: operations.AdsensehostAccountsListRequest) -> operations.AdsensehostAccountsListResponse:
        r"""List hosted accounts associated with this AdSense account by ad client id.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/accounts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsensehostAccountsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Accounts])
                res.accounts = out

        return res

    
    def adsensehost_accounts_reports_generate(self, request: operations.AdsensehostAccountsReportsGenerateRequest) -> operations.AdsensehostAccountsReportsGenerateResponse:
        r"""Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify \"alt=csv\" as a query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/reports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsensehostAccountsReportsGenerateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Report])
                res.report = out

        return res

    