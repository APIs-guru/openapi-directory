import warnings
import requests
from typing import List
from sdk.models import operations
from . import utils


SERVERS = [
	"https://www.googleapis.com/analytics/v2.4",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def analytics_data_get(self, request: operations.AnalyticsDataGetRequest) -> operations.AnalyticsDataGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/data"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsDataGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def analytics_management_accounts_list(self, request: operations.AnalyticsManagementAccountsListRequest) -> operations.AnalyticsManagementAccountsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/management/accounts"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementAccountsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def analytics_management_goals_list(self, request: operations.AnalyticsManagementGoalsListRequest) -> operations.AnalyticsManagementGoalsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementGoalsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def analytics_management_profiles_list(self, request: operations.AnalyticsManagementProfilesListRequest) -> operations.AnalyticsManagementProfilesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementProfilesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def analytics_management_segments_list(self, request: operations.AnalyticsManagementSegmentsListRequest) -> operations.AnalyticsManagementSegmentsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/management/segments"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementSegmentsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def analytics_management_webproperties_list(self, request: operations.AnalyticsManagementWebpropertiesListRequest) -> operations.AnalyticsManagementWebpropertiesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/management/accounts/{accountId}/webproperties", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsManagementWebpropertiesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    