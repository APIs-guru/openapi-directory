import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Search:
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

    
    def search(self, request: operations.SearchRequest) -> operations.SearchResponse:
        r"""Searches through source code
        Performs a search through the full Debian Code Search corpus, blocking until all results are available (might take a few seconds depending on the search query).
        
        Search results are ordered by their ranking (best results come first).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SearchResult]])
                res.search_results = out
        elif r.status_code == 403:
            pass

        return res

    
    def searchperpackage(self, request: operations.SearchperpackageRequest) -> operations.SearchperpackageResponse:
        r"""Like /search, but aggregates per package
        The search results are currently sorted arbitrarily, but we intend to sort them by ranking eventually: https://github.com/Debian/dcs/blob/51338e934eb7ee18d00c5c18531c0790a83cb698/cmd/dcs-web/querymanager.go#L719
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/searchperpackage"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchperpackageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PackageSearchResult]])
                res.package_search_results = out
        elif r.status_code == 403:
            pass

        return res

    