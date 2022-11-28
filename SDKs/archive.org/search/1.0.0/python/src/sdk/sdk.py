

import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.archive.org",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def get_search_v1_fields(self, request: operations.GetSearchV1FieldsRequest) -> operations.GetSearchV1FieldsResponse:
        r"""Fields that can be requested
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/v1/fields"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchV1FieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.fields = out

        return res

    
    def get_search_v1_organic(self, request: operations.GetSearchV1OrganicRequest) -> operations.GetSearchV1OrganicResponse:
        r"""Return relevance-based results from search queries
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/v1/organic"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchV1OrganicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrganicResult])
                res.organic_result = out
        else:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out

        return res

    
    def get_search_v1_scrape(self, request: operations.GetSearchV1ScrapeRequest) -> operations.GetSearchV1ScrapeResponse:
        r"""Scrape search results from Internet Archive, allowing a scrolling cursor
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/v1/scrape"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchV1ScrapeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScrapeResult])
                res.scrape_result = out
        else:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out

        return res

    