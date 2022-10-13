import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://domainsdb.info/v1",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def get_domains_tld_zone_id_download(self, request: operations.GetDomainsTldZoneIDDownloadRequest) -> operations.GetDomainsTldZoneIDDownloadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/domains/tld/{zone_id}/download", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainsTldZoneIDDownloadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    
    def get_domains_tld_zone_id_search(self, request: operations.GetDomainsTldZoneIDSearchRequest) -> operations.GetDomainsTldZoneIDSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/domains/tld/{zone_id}/search", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainsTldZoneIDSearchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResults])
                res.search_results = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    
    def get_domains_updates_added(self, request: operations.GetDomainsUpdatesAddedRequest) -> operations.GetDomainsUpdatesAddedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/domains/updates/added"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainsUpdatesAddedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResults])
                res.search_results = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    
    def get_domains_updates_added_download(self, request: operations.GetDomainsUpdatesAddedDownloadRequest) -> operations.GetDomainsUpdatesAddedDownloadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/domains/updates/added/download"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainsUpdatesAddedDownloadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    
    def get_domains_updates_deleted(self, request: operations.GetDomainsUpdatesDeletedRequest) -> operations.GetDomainsUpdatesDeletedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/domains/updates/deleted"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainsUpdatesDeletedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResults])
                res.search_results = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    
    def get_domains_updates_deleted_download(self, request: operations.GetDomainsUpdatesDeletedDownloadRequest) -> operations.GetDomainsUpdatesDeletedDownloadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/domains/updates/deleted/download"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainsUpdatesDeletedDownloadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    
    def get_domains_updates_list(self, request: operations.GetDomainsUpdatesListRequest) -> operations.GetDomainsUpdatesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/domains/updates/list"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainsUpdatesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateModel])
                res.update_model = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    
    def get_info_tld_(self) -> operations.GetInfoTldResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/info/tld/"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInfoTldResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ZoneInfo]])
                res.zone_infos = out

        return res

    
    
    def get_info_tld_zone_(self, request: operations.GetInfoTldZoneRequest) -> operations.GetInfoTldZoneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/info/tld/{zone}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInfoTldZoneResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ZoneInfo])
                res.zone_info = out
        elif r.status_code == 404:
            pass

        return res

    
    
    def get_api_info_item(self, request: operations.GetAPIInfoItemRequest) -> operations.GetAPIInfoItemResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/info/api"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIInfoItemResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKeyInfo])
                res.api_key_info = out

        return res

    
    
    def get_search_domain_item(self, request: operations.GetSearchDomainItemRequest) -> operations.GetSearchDomainItemResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/domains/search"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchDomainItemResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResults])
                res.search_results = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    
    def get_statistics_collection(self, request: operations.GetStatisticsCollectionRequest) -> operations.GetStatisticsCollectionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/info/stat/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatisticsCollectionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ZoneStats]])
                res.zone_stats = out

        return res

    
    
    def get_statistics_item(self, request: operations.GetStatisticsItemRequest) -> operations.GetStatisticsItemResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/info/stat/{zone}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatisticsItemResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ZoneStats])
                res.zone_stats = out
        elif r.status_code == 404:
            pass

        return res

    
    
    def get_tld_domain_item(self, request: operations.GetTldDomainItemRequest) -> operations.GetTldDomainItemResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/domains/tld/{zone_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTldDomainItemResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResults])
                res.search_results = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    