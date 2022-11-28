import requests
from sdk.models import operations
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
            pass

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
            pass

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
            pass

        return res

    
    def analytics_management_segments_list(self, request: operations.AnalyticsManagementSegmentsListRequest) -> operations.AnalyticsManagementSegmentsListResponse:
        r"""Lists advanced segments to which the user has access.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/management/segments"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementSegmentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

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
            pass

        return res

    