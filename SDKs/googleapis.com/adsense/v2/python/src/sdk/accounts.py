import requests
from typing import Any,Optional
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

    
    def adsense_accounts_adclients_adunits_create(self, request: operations.AdsenseAccountsAdclientsAdunitsCreateRequest) -> operations.AdsenseAccountsAdclientsAdunitsCreateResponse:
        r"""Creates an ad unit. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product. Note that ad units can only be created for ad clients with an \"AFC\" product code. For more info see the [AdClient resource](/adsense/management/reference/rest/v2/accounts.adclients). For now, this method can only be used to create `DISPLAY` ad units. See: https://support.google.com/adsense/answer/9183566
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/adunits", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsAdclientsAdunitsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdUnit])
                res.ad_unit = out

        return res

    
    def adsense_accounts_adclients_adunits_get_adcode(self, request: operations.AdsenseAccountsAdclientsAdunitsGetAdcodeRequest) -> operations.AdsenseAccountsAdclientsAdunitsGetAdcodeResponse:
        r"""Gets the ad unit code for a given ad unit. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634) and [Where to place the ad code in your HTML](https://support.google.com/adsense/answer/9190028).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}/adcode", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsAdclientsAdunitsGetAdcodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdUnitAdCode])
                res.ad_unit_ad_code = out

        return res

    
    def adsense_accounts_adclients_adunits_list(self, request: operations.AdsenseAccountsAdclientsAdunitsListRequest) -> operations.AdsenseAccountsAdclientsAdunitsListResponse:
        r"""Lists all ad units under a specified account and ad client.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/adunits", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsAdclientsAdunitsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAdUnitsResponse])
                res.list_ad_units_response = out

        return res

    
    def adsense_accounts_adclients_adunits_list_linked_custom_channels(self, request: operations.AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsRequest) -> operations.AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsResponse:
        r"""Lists all the custom channels available for an ad unit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}:listLinkedCustomChannels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLinkedCustomChannelsResponse])
                res.list_linked_custom_channels_response = out

        return res

    
    def adsense_accounts_adclients_customchannels_create(self, request: operations.AdsenseAccountsAdclientsCustomchannelsCreateRequest) -> operations.AdsenseAccountsAdclientsCustomchannelsCreateResponse:
        r"""Creates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/customchannels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsAdclientsCustomchannelsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomChannel])
                res.custom_channel = out

        return res

    
    def adsense_accounts_adclients_customchannels_delete(self, request: operations.AdsenseAccountsAdclientsCustomchannelsDeleteRequest) -> operations.AdsenseAccountsAdclientsCustomchannelsDeleteResponse:
        r"""Deletes a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsAdclientsCustomchannelsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def adsense_accounts_adclients_customchannels_list(self, request: operations.AdsenseAccountsAdclientsCustomchannelsListRequest) -> operations.AdsenseAccountsAdclientsCustomchannelsListResponse:
        r"""Lists all the custom channels available in an ad client.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/customchannels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsAdclientsCustomchannelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCustomChannelsResponse])
                res.list_custom_channels_response = out

        return res

    
    def adsense_accounts_adclients_customchannels_list_linked_ad_units(self, request: operations.AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsRequest) -> operations.AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsResponse:
        r"""Lists all the ad units available for a custom channel.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}:listLinkedAdUnits", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLinkedAdUnitsResponse])
                res.list_linked_ad_units_response = out

        return res

    
    def adsense_accounts_adclients_customchannels_patch(self, request: operations.AdsenseAccountsAdclientsCustomchannelsPatchRequest) -> operations.AdsenseAccountsAdclientsCustomchannelsPatchResponse:
        r"""Updates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsAdclientsCustomchannelsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomChannel])
                res.custom_channel = out

        return res

    
    def adsense_accounts_adclients_list(self, request: operations.AdsenseAccountsAdclientsListRequest) -> operations.AdsenseAccountsAdclientsListResponse:
        r"""Lists all the ad clients available in an account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/adclients", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsAdclientsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAdClientsResponse])
                res.list_ad_clients_response = out

        return res

    
    def adsense_accounts_adclients_urlchannels_list(self, request: operations.AdsenseAccountsAdclientsUrlchannelsListRequest) -> operations.AdsenseAccountsAdclientsUrlchannelsListResponse:
        r"""Lists active url channels.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/urlchannels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsAdclientsUrlchannelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListURLChannelsResponse])
                res.list_url_channels_response = out

        return res

    
    def adsense_accounts_alerts_list(self, request: operations.AdsenseAccountsAlertsListRequest) -> operations.AdsenseAccountsAlertsListResponse:
        r"""Lists all the alerts available in an account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/alerts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsAlertsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAlertsResponse])
                res.list_alerts_response = out

        return res

    
    def adsense_accounts_get_ad_blocking_recovery_tag(self, request: operations.AdsenseAccountsGetAdBlockingRecoveryTagRequest) -> operations.AdsenseAccountsGetAdBlockingRecoveryTagResponse:
        r"""Gets the ad blocking recovery tag of an account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}/adBlockingRecoveryTag", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsGetAdBlockingRecoveryTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdBlockingRecoveryTag])
                res.ad_blocking_recovery_tag = out

        return res

    
    def adsense_accounts_list(self, request: operations.AdsenseAccountsListRequest) -> operations.AdsenseAccountsListResponse:
        r"""Lists all accounts available to this user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/accounts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAccountsResponse])
                res.list_accounts_response = out

        return res

    
    def adsense_accounts_list_child_accounts(self, request: operations.AdsenseAccountsListChildAccountsRequest) -> operations.AdsenseAccountsListChildAccountsResponse:
        r"""Lists all accounts directly managed by the given AdSense account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}:listChildAccounts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsListChildAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListChildAccountsResponse])
                res.list_child_accounts_response = out

        return res

    
    def adsense_accounts_payments_list(self, request: operations.AdsenseAccountsPaymentsListRequest) -> operations.AdsenseAccountsPaymentsListResponse:
        r"""Lists all the payments available for an account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/payments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsPaymentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPaymentsResponse])
                res.list_payments_response = out

        return res

    
    def adsense_accounts_reports_generate(self, request: operations.AdsenseAccountsReportsGenerateRequest) -> operations.AdsenseAccountsReportsGenerateResponse:
        r"""Generates an ad hoc report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{account}/reports:generate", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsReportsGenerateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReportResult])
                res.report_result = out

        return res

    
    def adsense_accounts_reports_generate_csv(self, request: operations.AdsenseAccountsReportsGenerateCsvRequest) -> operations.AdsenseAccountsReportsGenerateCsvResponse:
        r"""Generates a csv formatted ad hoc report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{account}/reports:generateCsv", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsReportsGenerateCsvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    def adsense_accounts_reports_get_saved(self, request: operations.AdsenseAccountsReportsGetSavedRequest) -> operations.AdsenseAccountsReportsGetSavedResponse:
        r"""Gets the saved report from the given resource name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}/saved", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsReportsGetSavedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SavedReport])
                res.saved_report = out

        return res

    
    def adsense_accounts_reports_saved_generate(self, request: operations.AdsenseAccountsReportsSavedGenerateRequest) -> operations.AdsenseAccountsReportsSavedGenerateResponse:
        r"""Generates a saved report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}/saved:generate", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsReportsSavedGenerateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReportResult])
                res.report_result = out

        return res

    
    def adsense_accounts_reports_saved_generate_csv(self, request: operations.AdsenseAccountsReportsSavedGenerateCsvRequest) -> operations.AdsenseAccountsReportsSavedGenerateCsvResponse:
        r"""Generates a csv formatted saved report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}/saved:generateCsv", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsReportsSavedGenerateCsvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    def adsense_accounts_reports_saved_list(self, request: operations.AdsenseAccountsReportsSavedListRequest) -> operations.AdsenseAccountsReportsSavedListResponse:
        r"""Lists saved reports.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/reports/saved", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsReportsSavedListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSavedReportsResponse])
                res.list_saved_reports_response = out

        return res

    
    def adsense_accounts_sites_get(self, request: operations.AdsenseAccountsSitesGetRequest) -> operations.AdsenseAccountsSitesGetResponse:
        r"""Gets information about the selected site.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsSitesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Site])
                res.site = out

        return res

    
    def adsense_accounts_sites_list(self, request: operations.AdsenseAccountsSitesListRequest) -> operations.AdsenseAccountsSitesListResponse:
        r"""Lists all the sites available in an account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/sites", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAccountsSitesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSitesResponse])
                res.list_sites_response = out

        return res

    