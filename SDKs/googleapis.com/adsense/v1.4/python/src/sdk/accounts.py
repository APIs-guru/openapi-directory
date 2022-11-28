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

    
    def adsense_accounts_adclients_get_ad_code(self, request: operations.AdsenseAccountsAdclientsGetAdCodeRequest) -> operations.AdsenseAccountsAdclientsGetAdCodeResponse:
        r"""Get Auto ad code for a given ad client.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/adclients/{adClientId}/adcode", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsAdclientsGetAdCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdCode])
                res.ad_code = out

        return res

    
    def adsense_accounts_adclients_list(self, request: operations.AdsenseAccountsAdclientsListRequest) -> operations.AdsenseAccountsAdclientsListResponse:
        r"""List all ad clients in the specified account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/adclients", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsAdclientsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdClients])
                res.ad_clients = out

        return res

    
    def adsense_accounts_adunits_customchannels_list(self, request: operations.AdsenseAccountsAdunitsCustomchannelsListRequest) -> operations.AdsenseAccountsAdunitsCustomchannelsListResponse:
        r"""List all custom channels which the specified ad unit belongs to.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}/customchannels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsAdunitsCustomchannelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomChannels])
                res.custom_channels = out

        return res

    
    def adsense_accounts_adunits_get(self, request: operations.AdsenseAccountsAdunitsGetRequest) -> operations.AdsenseAccountsAdunitsGetResponse:
        r"""Gets the specified ad unit in the specified ad client for the specified account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsAdunitsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdUnit])
                res.ad_unit = out

        return res

    
    def adsense_accounts_adunits_get_ad_code(self, request: operations.AdsenseAccountsAdunitsGetAdCodeRequest) -> operations.AdsenseAccountsAdunitsGetAdCodeResponse:
        r"""Get ad code for the specified ad unit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}/adcode", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsAdunitsGetAdCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdCode])
                res.ad_code = out

        return res

    
    def adsense_accounts_adunits_list(self, request: operations.AdsenseAccountsAdunitsListRequest) -> operations.AdsenseAccountsAdunitsListResponse:
        r"""List all ad units in the specified ad client for the specified account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/adclients/{adClientId}/adunits", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsAdunitsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdUnits])
                res.ad_units = out

        return res

    
    def adsense_accounts_alerts_delete(self, request: operations.AdsenseAccountsAlertsDeleteRequest) -> operations.AdsenseAccountsAlertsDeleteResponse:
        r"""Dismiss (delete) the specified alert from the specified publisher AdSense account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/alerts/{alertId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsAlertsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def adsense_accounts_alerts_list(self, request: operations.AdsenseAccountsAlertsListRequest) -> operations.AdsenseAccountsAlertsListResponse:
        r"""List the alerts for the specified AdSense account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/alerts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsAlertsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Alerts])
                res.alerts = out

        return res

    
    def adsense_accounts_customchannels_adunits_list(self, request: operations.AdsenseAccountsCustomchannelsAdunitsListRequest) -> operations.AdsenseAccountsCustomchannelsAdunitsListResponse:
        r"""List all ad units in the specified custom channel.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/adclients/{adClientId}/customchannels/{customChannelId}/adunits", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsCustomchannelsAdunitsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdUnits])
                res.ad_units = out

        return res

    
    def adsense_accounts_customchannels_get(self, request: operations.AdsenseAccountsCustomchannelsGetRequest) -> operations.AdsenseAccountsCustomchannelsGetResponse:
        r"""Get the specified custom channel from the specified ad client for the specified account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/adclients/{adClientId}/customchannels/{customChannelId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsCustomchannelsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomChannel])
                res.custom_channel = out

        return res

    
    def adsense_accounts_customchannels_list(self, request: operations.AdsenseAccountsCustomchannelsListRequest) -> operations.AdsenseAccountsCustomchannelsListResponse:
        r"""List all custom channels in the specified ad client for the specified account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/adclients/{adClientId}/customchannels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsCustomchannelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomChannels])
                res.custom_channels = out

        return res

    
    def adsense_accounts_get(self, request: operations.AdsenseAccountsGetRequest) -> operations.AdsenseAccountsGetResponse:
        r"""Get information about the selected AdSense account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Account])
                res.account = out

        return res

    
    def adsense_accounts_list(self, request: operations.AdsenseAccountsListRequest) -> operations.AdsenseAccountsListResponse:
        r"""List all accounts available to this AdSense account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/accounts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Accounts])
                res.accounts = out

        return res

    
    def adsense_accounts_payments_list(self, request: operations.AdsenseAccountsPaymentsListRequest) -> operations.AdsenseAccountsPaymentsListResponse:
        r"""List the payments for the specified AdSense account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/payments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsPaymentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Payments])
                res.payments = out

        return res

    
    def adsense_accounts_reports_generate(self, request: operations.AdsenseAccountsReportsGenerateRequest) -> operations.AdsenseAccountsReportsGenerateResponse:
        r"""Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify \"alt=csv\" as a query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/reports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsReportsGenerateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdsenseReportsGenerateResponse])
                res.adsense_reports_generate_response = out

        return res

    
    def adsense_accounts_reports_saved_generate(self, request: operations.AdsenseAccountsReportsSavedGenerateRequest) -> operations.AdsenseAccountsReportsSavedGenerateResponse:
        r"""Generate an AdSense report based on the saved report ID sent in the query parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/reports/{savedReportId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsReportsSavedGenerateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdsenseReportsGenerateResponse])
                res.adsense_reports_generate_response = out

        return res

    
    def adsense_accounts_reports_saved_list(self, request: operations.AdsenseAccountsReportsSavedListRequest) -> operations.AdsenseAccountsReportsSavedListResponse:
        r"""List all saved reports in the specified AdSense account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/reports/saved", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsReportsSavedListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SavedReports])
                res.saved_reports = out

        return res

    
    def adsense_accounts_savedadstyles_get(self, request: operations.AdsenseAccountsSavedadstylesGetRequest) -> operations.AdsenseAccountsSavedadstylesGetResponse:
        r"""List a specific saved ad style for the specified account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/savedadstyles/{savedAdStyleId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsSavedadstylesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SavedAdStyle])
                res.saved_ad_style = out

        return res

    
    def adsense_accounts_savedadstyles_list(self, request: operations.AdsenseAccountsSavedadstylesListRequest) -> operations.AdsenseAccountsSavedadstylesListResponse:
        r"""List all saved ad styles in the specified account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/savedadstyles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsSavedadstylesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SavedAdStyles])
                res.saved_ad_styles = out

        return res

    
    def adsense_accounts_urlchannels_list(self, request: operations.AdsenseAccountsUrlchannelsListRequest) -> operations.AdsenseAccountsUrlchannelsListResponse:
        r"""List all URL channels in the specified ad client for the specified account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/adclients/{adClientId}/urlchannels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsUrlchannelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.URLChannels])
                res.url_channels = out

        return res

    