import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Management:
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

    
    def analytics_management_account_summaries_list(self, request: operations.AnalyticsManagementAccountSummariesListRequest) -> operations.AnalyticsManagementAccountSummariesListResponse:
        r"""Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/management/accountSummaries"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementAccountSummariesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountSummaries])
                res.account_summaries = out

        return res

    
    def analytics_management_account_user_links_delete(self, request: operations.AnalyticsManagementAccountUserLinksDeleteRequest) -> operations.AnalyticsManagementAccountUserLinksDeleteResponse:
        r"""Removes a user from the given account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/entityUserLinks/{linkId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementAccountUserLinksDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def analytics_management_account_user_links_insert(self, request: operations.AnalyticsManagementAccountUserLinksInsertRequest) -> operations.AnalyticsManagementAccountUserLinksInsertResponse:
        r"""Adds a new user to the given account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/entityUserLinks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementAccountUserLinksInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EntityUserLink])
                res.entity_user_link = out

        return res

    
    def analytics_management_account_user_links_list(self, request: operations.AnalyticsManagementAccountUserLinksListRequest) -> operations.AnalyticsManagementAccountUserLinksListResponse:
        r"""Lists account-user links for a given account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/entityUserLinks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementAccountUserLinksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EntityUserLinks])
                res.entity_user_links = out

        return res

    
    def analytics_management_account_user_links_update(self, request: operations.AnalyticsManagementAccountUserLinksUpdateRequest) -> operations.AnalyticsManagementAccountUserLinksUpdateResponse:
        r"""Updates permissions for an existing user on the given account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/entityUserLinks/{linkId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementAccountUserLinksUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EntityUserLink])
                res.entity_user_link = out

        return res

    
    def analytics_management_accounts_list(self, request: operations.AnalyticsManagementAccountsListRequest) -> operations.AnalyticsManagementAccountsListResponse:
        r"""Lists all accounts to which the user has access.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/management/accounts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementAccountsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Accounts])
                res.accounts = out

        return res

    
    def analytics_management_client_id_hash_client_id(self, request: operations.AnalyticsManagementClientIDHashClientIDRequest) -> operations.AnalyticsManagementClientIDHashClientIDResponse:
        r"""Hashes the given Client ID.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/management/clientId:hashClientId"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementClientIDHashClientIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HashClientIDResponse])
                res.hash_client_id_response = out

        return res

    
    def analytics_management_custom_data_sources_list(self, request: operations.AnalyticsManagementCustomDataSourcesListRequest) -> operations.AnalyticsManagementCustomDataSourcesListResponse:
        r"""List custom data sources to which the user has access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementCustomDataSourcesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomDataSources])
                res.custom_data_sources = out

        return res

    
    def analytics_management_custom_dimensions_get(self, request: operations.AnalyticsManagementCustomDimensionsGetRequest) -> operations.AnalyticsManagementCustomDimensionsGetResponse:
        r"""Get a custom dimension to which the user has access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementCustomDimensionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomDimension])
                res.custom_dimension = out

        return res

    
    def analytics_management_custom_dimensions_insert(self, request: operations.AnalyticsManagementCustomDimensionsInsertRequest) -> operations.AnalyticsManagementCustomDimensionsInsertResponse:
        r"""Create a new custom dimension.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementCustomDimensionsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomDimension])
                res.custom_dimension = out

        return res

    
    def analytics_management_custom_dimensions_list(self, request: operations.AnalyticsManagementCustomDimensionsListRequest) -> operations.AnalyticsManagementCustomDimensionsListResponse:
        r"""Lists custom dimensions to which the user has access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementCustomDimensionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomDimensions])
                res.custom_dimensions = out

        return res

    
    def analytics_management_custom_dimensions_patch(self, request: operations.AnalyticsManagementCustomDimensionsPatchRequest) -> operations.AnalyticsManagementCustomDimensionsPatchResponse:
        r"""Updates an existing custom dimension. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementCustomDimensionsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomDimension])
                res.custom_dimension = out

        return res

    
    def analytics_management_custom_dimensions_update(self, request: operations.AnalyticsManagementCustomDimensionsUpdateRequest) -> operations.AnalyticsManagementCustomDimensionsUpdateResponse:
        r"""Updates an existing custom dimension.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementCustomDimensionsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomDimension])
                res.custom_dimension = out

        return res

    
    def analytics_management_custom_metrics_get(self, request: operations.AnalyticsManagementCustomMetricsGetRequest) -> operations.AnalyticsManagementCustomMetricsGetResponse:
        r"""Get a custom metric to which the user has access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementCustomMetricsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomMetric])
                res.custom_metric = out

        return res

    
    def analytics_management_custom_metrics_insert(self, request: operations.AnalyticsManagementCustomMetricsInsertRequest) -> operations.AnalyticsManagementCustomMetricsInsertResponse:
        r"""Create a new custom metric.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementCustomMetricsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomMetric])
                res.custom_metric = out

        return res

    
    def analytics_management_custom_metrics_list(self, request: operations.AnalyticsManagementCustomMetricsListRequest) -> operations.AnalyticsManagementCustomMetricsListResponse:
        r"""Lists custom metrics to which the user has access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementCustomMetricsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomMetrics])
                res.custom_metrics = out

        return res

    
    def analytics_management_custom_metrics_patch(self, request: operations.AnalyticsManagementCustomMetricsPatchRequest) -> operations.AnalyticsManagementCustomMetricsPatchResponse:
        r"""Updates an existing custom metric. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementCustomMetricsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomMetric])
                res.custom_metric = out

        return res

    
    def analytics_management_custom_metrics_update(self, request: operations.AnalyticsManagementCustomMetricsUpdateRequest) -> operations.AnalyticsManagementCustomMetricsUpdateResponse:
        r"""Updates an existing custom metric.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementCustomMetricsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomMetric])
                res.custom_metric = out

        return res

    
    def analytics_management_experiments_delete(self, request: operations.AnalyticsManagementExperimentsDeleteRequest) -> operations.AnalyticsManagementExperimentsDeleteResponse:
        r"""Delete an experiment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementExperimentsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def analytics_management_experiments_get(self, request: operations.AnalyticsManagementExperimentsGetRequest) -> operations.AnalyticsManagementExperimentsGetResponse:
        r"""Returns an experiment to which the user has access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementExperimentsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Experiment])
                res.experiment = out

        return res

    
    def analytics_management_experiments_insert(self, request: operations.AnalyticsManagementExperimentsInsertRequest) -> operations.AnalyticsManagementExperimentsInsertResponse:
        r"""Create a new experiment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementExperimentsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Experiment])
                res.experiment = out

        return res

    
    def analytics_management_experiments_list(self, request: operations.AnalyticsManagementExperimentsListRequest) -> operations.AnalyticsManagementExperimentsListResponse:
        r"""Lists experiments to which the user has access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementExperimentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Experiments])
                res.experiments = out

        return res

    
    def analytics_management_experiments_patch(self, request: operations.AnalyticsManagementExperimentsPatchRequest) -> operations.AnalyticsManagementExperimentsPatchResponse:
        r"""Update an existing experiment. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementExperimentsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Experiment])
                res.experiment = out

        return res

    
    def analytics_management_experiments_update(self, request: operations.AnalyticsManagementExperimentsUpdateRequest) -> operations.AnalyticsManagementExperimentsUpdateResponse:
        r"""Update an existing experiment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementExperimentsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Experiment])
                res.experiment = out

        return res

    
    def analytics_management_filters_delete(self, request: operations.AnalyticsManagementFiltersDeleteRequest) -> operations.AnalyticsManagementFiltersDeleteResponse:
        r"""Delete a filter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/filters/{filterId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementFiltersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Filter])
                res.filter = out

        return res

    
    def analytics_management_filters_get(self, request: operations.AnalyticsManagementFiltersGetRequest) -> operations.AnalyticsManagementFiltersGetResponse:
        r"""Returns filters to which the user has access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/filters/{filterId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementFiltersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Filter])
                res.filter = out

        return res

    
    def analytics_management_filters_insert(self, request: operations.AnalyticsManagementFiltersInsertRequest) -> operations.AnalyticsManagementFiltersInsertResponse:
        r"""Create a new filter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/filters", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementFiltersInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Filter])
                res.filter = out

        return res

    
    def analytics_management_filters_list(self, request: operations.AnalyticsManagementFiltersListRequest) -> operations.AnalyticsManagementFiltersListResponse:
        r"""Lists all filters for an account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/filters", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementFiltersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Filters])
                res.filters = out

        return res

    
    def analytics_management_filters_patch(self, request: operations.AnalyticsManagementFiltersPatchRequest) -> operations.AnalyticsManagementFiltersPatchResponse:
        r"""Updates an existing filter. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/filters/{filterId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementFiltersPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Filter])
                res.filter = out

        return res

    
    def analytics_management_filters_update(self, request: operations.AnalyticsManagementFiltersUpdateRequest) -> operations.AnalyticsManagementFiltersUpdateResponse:
        r"""Updates an existing filter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/filters/{filterId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementFiltersUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Filter])
                res.filter = out

        return res

    
    def analytics_management_goals_get(self, request: operations.AnalyticsManagementGoalsGetRequest) -> operations.AnalyticsManagementGoalsGetResponse:
        r"""Gets a goal to which the user has access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementGoalsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Goal])
                res.goal = out

        return res

    
    def analytics_management_goals_insert(self, request: operations.AnalyticsManagementGoalsInsertRequest) -> operations.AnalyticsManagementGoalsInsertResponse:
        r"""Create a new goal.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementGoalsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Goal])
                res.goal = out

        return res

    
    def analytics_management_goals_list(self, request: operations.AnalyticsManagementGoalsListRequest) -> operations.AnalyticsManagementGoalsListResponse:
        r"""Lists goals to which the user has access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementGoalsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Goals])
                res.goals = out

        return res

    
    def analytics_management_goals_patch(self, request: operations.AnalyticsManagementGoalsPatchRequest) -> operations.AnalyticsManagementGoalsPatchResponse:
        r"""Updates an existing goal. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementGoalsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Goal])
                res.goal = out

        return res

    
    def analytics_management_goals_update(self, request: operations.AnalyticsManagementGoalsUpdateRequest) -> operations.AnalyticsManagementGoalsUpdateResponse:
        r"""Updates an existing goal.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementGoalsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Goal])
                res.goal = out

        return res

    
    def analytics_management_profile_filter_links_delete(self, request: operations.AnalyticsManagementProfileFilterLinksDeleteRequest) -> operations.AnalyticsManagementProfileFilterLinksDeleteResponse:
        r"""Delete a profile filter link.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementProfileFilterLinksDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def analytics_management_profile_filter_links_get(self, request: operations.AnalyticsManagementProfileFilterLinksGetRequest) -> operations.AnalyticsManagementProfileFilterLinksGetResponse:
        r"""Returns a single profile filter link.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementProfileFilterLinksGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProfileFilterLink])
                res.profile_filter_link = out

        return res

    
    def analytics_management_profile_filter_links_insert(self, request: operations.AnalyticsManagementProfileFilterLinksInsertRequest) -> operations.AnalyticsManagementProfileFilterLinksInsertResponse:
        r"""Create a new profile filter link.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementProfileFilterLinksInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProfileFilterLink])
                res.profile_filter_link = out

        return res

    
    def analytics_management_profile_filter_links_list(self, request: operations.AnalyticsManagementProfileFilterLinksListRequest) -> operations.AnalyticsManagementProfileFilterLinksListResponse:
        r"""Lists all profile filter links for a profile.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementProfileFilterLinksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProfileFilterLinks])
                res.profile_filter_links = out

        return res

    
    def analytics_management_profile_filter_links_patch(self, request: operations.AnalyticsManagementProfileFilterLinksPatchRequest) -> operations.AnalyticsManagementProfileFilterLinksPatchResponse:
        r"""Update an existing profile filter link. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementProfileFilterLinksPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProfileFilterLink])
                res.profile_filter_link = out

        return res

    
    def analytics_management_profile_filter_links_update(self, request: operations.AnalyticsManagementProfileFilterLinksUpdateRequest) -> operations.AnalyticsManagementProfileFilterLinksUpdateResponse:
        r"""Update an existing profile filter link.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementProfileFilterLinksUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProfileFilterLink])
                res.profile_filter_link = out

        return res

    
    def analytics_management_profile_user_links_delete(self, request: operations.AnalyticsManagementProfileUserLinksDeleteRequest) -> operations.AnalyticsManagementProfileUserLinksDeleteResponse:
        r"""Removes a user from the given view (profile).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementProfileUserLinksDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def analytics_management_profile_user_links_insert(self, request: operations.AnalyticsManagementProfileUserLinksInsertRequest) -> operations.AnalyticsManagementProfileUserLinksInsertResponse:
        r"""Adds a new user to the given view (profile).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementProfileUserLinksInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EntityUserLink])
                res.entity_user_link = out

        return res

    
    def analytics_management_profile_user_links_list(self, request: operations.AnalyticsManagementProfileUserLinksListRequest) -> operations.AnalyticsManagementProfileUserLinksListResponse:
        r"""Lists profile-user links for a given view (profile).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementProfileUserLinksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EntityUserLinks])
                res.entity_user_links = out

        return res

    
    def analytics_management_profile_user_links_update(self, request: operations.AnalyticsManagementProfileUserLinksUpdateRequest) -> operations.AnalyticsManagementProfileUserLinksUpdateResponse:
        r"""Updates permissions for an existing user on the given view (profile).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementProfileUserLinksUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EntityUserLink])
                res.entity_user_link = out

        return res

    
    def analytics_management_profiles_delete(self, request: operations.AnalyticsManagementProfilesDeleteRequest) -> operations.AnalyticsManagementProfilesDeleteResponse:
        r"""Deletes a view (profile).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementProfilesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def analytics_management_profiles_get(self, request: operations.AnalyticsManagementProfilesGetRequest) -> operations.AnalyticsManagementProfilesGetResponse:
        r"""Gets a view (profile) to which the user has access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementProfilesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Profile])
                res.profile = out

        return res

    
    def analytics_management_profiles_insert(self, request: operations.AnalyticsManagementProfilesInsertRequest) -> operations.AnalyticsManagementProfilesInsertResponse:
        r"""Create a new view (profile).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementProfilesInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Profile])
                res.profile = out

        return res

    
    def analytics_management_profiles_list(self, request: operations.AnalyticsManagementProfilesListRequest) -> operations.AnalyticsManagementProfilesListResponse:
        r"""Lists views (profiles) to which the user has access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementProfilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Profiles])
                res.profiles = out

        return res

    
    def analytics_management_profiles_patch(self, request: operations.AnalyticsManagementProfilesPatchRequest) -> operations.AnalyticsManagementProfilesPatchResponse:
        r"""Updates an existing view (profile). This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementProfilesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Profile])
                res.profile = out

        return res

    
    def analytics_management_profiles_update(self, request: operations.AnalyticsManagementProfilesUpdateRequest) -> operations.AnalyticsManagementProfilesUpdateResponse:
        r"""Updates an existing view (profile).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementProfilesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Profile])
                res.profile = out

        return res

    
    def analytics_management_remarketing_audience_delete(self, request: operations.AnalyticsManagementRemarketingAudienceDeleteRequest) -> operations.AnalyticsManagementRemarketingAudienceDeleteResponse:
        r"""Delete a remarketing audience.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementRemarketingAudienceDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def analytics_management_remarketing_audience_get(self, request: operations.AnalyticsManagementRemarketingAudienceGetRequest) -> operations.AnalyticsManagementRemarketingAudienceGetResponse:
        r"""Gets a remarketing audience to which the user has access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementRemarketingAudienceGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RemarketingAudience])
                res.remarketing_audience = out

        return res

    
    def analytics_management_remarketing_audience_insert(self, request: operations.AnalyticsManagementRemarketingAudienceInsertRequest) -> operations.AnalyticsManagementRemarketingAudienceInsertResponse:
        r"""Creates a new remarketing audience.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementRemarketingAudienceInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RemarketingAudience])
                res.remarketing_audience = out

        return res

    
    def analytics_management_remarketing_audience_list(self, request: operations.AnalyticsManagementRemarketingAudienceListRequest) -> operations.AnalyticsManagementRemarketingAudienceListResponse:
        r"""Lists remarketing audiences to which the user has access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementRemarketingAudienceListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RemarketingAudiences])
                res.remarketing_audiences = out

        return res

    
    def analytics_management_remarketing_audience_patch(self, request: operations.AnalyticsManagementRemarketingAudiencePatchRequest) -> operations.AnalyticsManagementRemarketingAudiencePatchResponse:
        r"""Updates an existing remarketing audience. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementRemarketingAudiencePatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RemarketingAudience])
                res.remarketing_audience = out

        return res

    
    def analytics_management_remarketing_audience_update(self, request: operations.AnalyticsManagementRemarketingAudienceUpdateRequest) -> operations.AnalyticsManagementRemarketingAudienceUpdateResponse:
        r"""Updates an existing remarketing audience.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementRemarketingAudienceUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RemarketingAudience])
                res.remarketing_audience = out

        return res

    
    def analytics_management_segments_list(self, request: operations.AnalyticsManagementSegmentsListRequest) -> operations.AnalyticsManagementSegmentsListResponse:
        r"""Lists segments to which the user has access.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/management/segments"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementSegmentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Segments])
                res.segments = out

        return res

    
    def analytics_management_unsampled_reports_delete(self, request: operations.AnalyticsManagementUnsampledReportsDeleteRequest) -> operations.AnalyticsManagementUnsampledReportsDeleteResponse:
        r"""Deletes an unsampled report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementUnsampledReportsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def analytics_management_unsampled_reports_get(self, request: operations.AnalyticsManagementUnsampledReportsGetRequest) -> operations.AnalyticsManagementUnsampledReportsGetResponse:
        r"""Returns a single unsampled report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementUnsampledReportsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnsampledReport])
                res.unsampled_report = out

        return res

    
    def analytics_management_unsampled_reports_insert(self, request: operations.AnalyticsManagementUnsampledReportsInsertRequest) -> operations.AnalyticsManagementUnsampledReportsInsertResponse:
        r"""Create a new unsampled report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementUnsampledReportsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnsampledReport])
                res.unsampled_report = out

        return res

    
    def analytics_management_unsampled_reports_list(self, request: operations.AnalyticsManagementUnsampledReportsListRequest) -> operations.AnalyticsManagementUnsampledReportsListResponse:
        r"""Lists unsampled reports to which the user has access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementUnsampledReportsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnsampledReports])
                res.unsampled_reports = out

        return res

    
    def analytics_management_uploads_delete_upload_data(self, request: operations.AnalyticsManagementUploadsDeleteUploadDataRequest) -> operations.AnalyticsManagementUploadsDeleteUploadDataResponse:
        r"""Delete data associated with a previous upload.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/deleteUploadData", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementUploadsDeleteUploadDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def analytics_management_uploads_get(self, request: operations.AnalyticsManagementUploadsGetRequest) -> operations.AnalyticsManagementUploadsGetResponse:
        r"""List uploads to which the user has access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads/{uploadId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementUploadsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Upload])
                res.upload = out

        return res

    
    def analytics_management_uploads_list(self, request: operations.AnalyticsManagementUploadsListRequest) -> operations.AnalyticsManagementUploadsListResponse:
        r"""List uploads to which the user has access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementUploadsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Uploads])
                res.uploads = out

        return res

    
    def analytics_management_uploads_upload_data(self, request: operations.AnalyticsManagementUploadsUploadDataRequest) -> operations.AnalyticsManagementUploadsUploadDataResponse:
        r"""Upload data for a custom data source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementUploadsUploadDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Upload])
                res.upload = out

        return res

    
    def analytics_management_web_property_ad_words_links_delete(self, request: operations.AnalyticsManagementWebPropertyAdWordsLinksDeleteRequest) -> operations.AnalyticsManagementWebPropertyAdWordsLinksDeleteResponse:
        r"""Deletes a web property-Google Ads link.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementWebPropertyAdWordsLinksDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def analytics_management_web_property_ad_words_links_get(self, request: operations.AnalyticsManagementWebPropertyAdWordsLinksGetRequest) -> operations.AnalyticsManagementWebPropertyAdWordsLinksGetResponse:
        r"""Returns a web property-Google Ads link to which the user has access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementWebPropertyAdWordsLinksGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EntityAdWordsLink])
                res.entity_ad_words_link = out

        return res

    
    def analytics_management_web_property_ad_words_links_insert(self, request: operations.AnalyticsManagementWebPropertyAdWordsLinksInsertRequest) -> operations.AnalyticsManagementWebPropertyAdWordsLinksInsertResponse:
        r"""Creates a webProperty-Google Ads link.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementWebPropertyAdWordsLinksInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EntityAdWordsLink])
                res.entity_ad_words_link = out

        return res

    
    def analytics_management_web_property_ad_words_links_list(self, request: operations.AnalyticsManagementWebPropertyAdWordsLinksListRequest) -> operations.AnalyticsManagementWebPropertyAdWordsLinksListResponse:
        r"""Lists webProperty-Google Ads links for a given web property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementWebPropertyAdWordsLinksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EntityAdWordsLinks])
                res.entity_ad_words_links = out

        return res

    
    def analytics_management_web_property_ad_words_links_patch(self, request: operations.AnalyticsManagementWebPropertyAdWordsLinksPatchRequest) -> operations.AnalyticsManagementWebPropertyAdWordsLinksPatchResponse:
        r"""Updates an existing webProperty-Google Ads link. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementWebPropertyAdWordsLinksPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EntityAdWordsLink])
                res.entity_ad_words_link = out

        return res

    
    def analytics_management_web_property_ad_words_links_update(self, request: operations.AnalyticsManagementWebPropertyAdWordsLinksUpdateRequest) -> operations.AnalyticsManagementWebPropertyAdWordsLinksUpdateResponse:
        r"""Updates an existing webProperty-Google Ads link.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementWebPropertyAdWordsLinksUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EntityAdWordsLink])
                res.entity_ad_words_link = out

        return res

    
    def analytics_management_webproperties_get(self, request: operations.AnalyticsManagementWebpropertiesGetRequest) -> operations.AnalyticsManagementWebpropertiesGetResponse:
        r"""Gets a web property to which the user has access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementWebpropertiesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Webproperty])
                res.webproperty = out

        return res

    
    def analytics_management_webproperties_insert(self, request: operations.AnalyticsManagementWebpropertiesInsertRequest) -> operations.AnalyticsManagementWebpropertiesInsertResponse:
        r"""Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementWebpropertiesInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Webproperty])
                res.webproperty = out

        return res

    
    def analytics_management_webproperties_list(self, request: operations.AnalyticsManagementWebpropertiesListRequest) -> operations.AnalyticsManagementWebpropertiesListResponse:
        r"""Lists web properties to which the user has access.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementWebpropertiesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Webproperties])
                res.webproperties = out

        return res

    
    def analytics_management_webproperties_patch(self, request: operations.AnalyticsManagementWebpropertiesPatchRequest) -> operations.AnalyticsManagementWebpropertiesPatchResponse:
        r"""Updates an existing web property. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementWebpropertiesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Webproperty])
                res.webproperty = out

        return res

    
    def analytics_management_webproperties_update(self, request: operations.AnalyticsManagementWebpropertiesUpdateRequest) -> operations.AnalyticsManagementWebpropertiesUpdateResponse:
        r"""Updates an existing web property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementWebpropertiesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Webproperty])
                res.webproperty = out

        return res

    
    def analytics_management_webproperty_user_links_delete(self, request: operations.AnalyticsManagementWebpropertyUserLinksDeleteRequest) -> operations.AnalyticsManagementWebpropertyUserLinksDeleteResponse:
        r"""Removes a user from the given web property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementWebpropertyUserLinksDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def analytics_management_webproperty_user_links_insert(self, request: operations.AnalyticsManagementWebpropertyUserLinksInsertRequest) -> operations.AnalyticsManagementWebpropertyUserLinksInsertResponse:
        r"""Adds a new user to the given web property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementWebpropertyUserLinksInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EntityUserLink])
                res.entity_user_link = out

        return res

    
    def analytics_management_webproperty_user_links_list(self, request: operations.AnalyticsManagementWebpropertyUserLinksListRequest) -> operations.AnalyticsManagementWebpropertyUserLinksListResponse:
        r"""Lists webProperty-user links for a given web property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementWebpropertyUserLinksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EntityUserLinks])
                res.entity_user_links = out

        return res

    
    def analytics_management_webproperty_user_links_update(self, request: operations.AnalyticsManagementWebpropertyUserLinksUpdateRequest) -> operations.AnalyticsManagementWebpropertyUserLinksUpdateResponse:
        r"""Updates permissions for an existing user on the given web property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementWebpropertyUserLinksUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EntityUserLink])
                res.entity_user_link = out

        return res

    