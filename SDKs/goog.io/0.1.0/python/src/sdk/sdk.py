

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.goog.io",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
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
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def crawl(self, request: operations.CrawlRequest) -> operations.CrawlResponse:
        r"""Crawl
        Perform Google Search
        
         Parameters
        ----------
        query : the string query to perform search. supports advance queries. Check out https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters guide for formating
        
        Returns
        -------
        json: a the html source of the results page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/crawl/{query}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CrawlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Crawl200ApplicationJSON])
                res.crawl_200_application_json_object = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out
        elif r.status_code == 429:
            pass

        return res

    
    def get_the_status_of_the_api_service(self) -> operations.GetTheStatusOfTheAPIServiceResponse:
        r"""Status
        It \"status\" == true then API is up, else the API is down
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTheStatusOfTheAPIServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTheStatusOfTheAPIService200ApplicationJSON])
                res.get_the_status_of_the_api_service_200_application_json_object = out
        elif r.status_code == 404:
            pass

        return res

    
    def images(self, request: operations.ImagesRequest) -> operations.ImagesResponse:
        r"""Images
        Perform Google Image Search
        
        Parameters
        ----------
        query : the string query to perform search. supports advance queries.
        
        Returns
        -------
        json: a list of results with the link, description, and title for each result
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/images/{query}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Images200ApplicationJSON])
                res.images_200_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def news(self, request: operations.NewsRequest) -> operations.NewsResponse:
        r"""News
        Perform Google News Search
        
         Parameters
        ----------
        query : the string query to perform search for Google news. A simple query for `president` will be `q=president`. An example of multiple keyword would be `q=news+about+presdient+trump`. News can also be filtered by country and language. For `US` news and in English the query will be `q=trump&ceid=US:en` for news in Great Britian the query will be `q=trump&ceid=GB:en`
        
        Returns
        -------
        json: {\"feed\": { \"title\" : \"trump\" ...} , \"entites\": [ {\"title\" : \"Trump doubles down on divisive messaging in speech to honor Independence Day - CNN\", \"links\": []} ...]}
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/news/{query}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.NewsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.News200ApplicationJSON])
                res.news_200_application_json_object = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out
        elif r.status_code == 429:
            pass

        return res

    
    def search(self, request: operations.SearchRequest) -> operations.SearchResponse:
        r"""Search
        Perform Google Search
        
        Parameters
        ----------
        query : the string query to perform search. supports advance queries. Check out https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters guide for formating
        
        Returns
        -------
        json: a list of results with the link, description, and title for each result
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/search/{query}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Search200ApplicationJSON])
                res.search_200_application_json_object = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out
        elif r.status_code == 429:
            pass

        return res

    
    def serp(self, request: operations.SerpRequest) -> operations.SerpResponse:
        r"""SERP
        Perform Google Search and search for website in Search Engine Results Pages (SERP)
        
        Parameters
        ----------
        query : the string query to perform search. supports advance queries. Check out https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters guide for formatting, it is recommended to set the query `&num=100`
        
        Returns
        -------
        json: a list of results with the query, website, searched_results, and position. json[\"position\"] will be set to -1 if website is not found in results
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/serp/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SerpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Serp200ApplicationJSON])
                res.serp_200_application_json_object = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out
        elif r.status_code == 429:
            pass

        return res

    