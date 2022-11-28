import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Domains:
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

    
    def get_domains_tld_zone_id_download(self, request: operations.GetDomainsTldZoneIDDownloadRequest) -> operations.GetDomainsTldZoneIDDownloadResponse:
        r"""Download Whole Dataset for TLD
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/tld/{zone_id}/download", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainsTldZoneIDDownloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_domains_tld_zone_id_search(self, request: operations.GetDomainsTldZoneIDSearchRequest) -> operations.GetDomainsTldZoneIDSearchResponse:
        r"""Domains Search for TLD
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/tld/{zone_id}/search", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
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
        r"""Get added domains, latest if date not specified
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/domains/updates/added"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
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
        r"""Download added domains, latest if date not specified
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/domains/updates/added/download"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainsUpdatesAddedDownloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_domains_updates_deleted(self, request: operations.GetDomainsUpdatesDeletedRequest) -> operations.GetDomainsUpdatesDeletedResponse:
        r"""Get deleted domains, latest if date not specified
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/domains/updates/deleted"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
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
        r"""Download deleted domains, latest if date not specified
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/domains/updates/deleted/download"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainsUpdatesDeletedDownloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_domains_updates_list(self, request: operations.GetDomainsUpdatesListRequest) -> operations.GetDomainsUpdatesListResponse:
        r"""List of updates
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/domains/updates/list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
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

    
    def get_search_domain_item(self, request: operations.GetSearchDomainItemRequest) -> operations.GetSearchDomainItemResponse:
        r"""Domains Database Search
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/domains/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
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

    
    def get_tld_domain_item(self, request: operations.GetTldDomainItemRequest) -> operations.GetTldDomainItemResponse:
        r"""Get TLD records
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/tld/{zone_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
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

    