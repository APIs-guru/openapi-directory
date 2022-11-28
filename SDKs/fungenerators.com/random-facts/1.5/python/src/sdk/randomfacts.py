import requests
from sdk.models import operations
from . import utils

class RandomFacts:
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

    
    def get_fact(self, request: operations.GetFactRequest) -> operations.GetFactResponse:
        r"""Get a Fact belonging to the id.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/fact"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_fact_categories(self, request: operations.GetFactCategoriesRequest) -> operations.GetFactCategoriesResponse:
        r"""Get a random Fact.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/fact/categories"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFactCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_fact_random(self, request: operations.GetFactRandomRequest) -> operations.GetFactRandomResponse:
        r"""Get a random Fact for a given category(optional) and subcategory(optional).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/fact/random"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFactRandomResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_fact_search(self, request: operations.GetFactSearchRequest) -> operations.GetFactSearchResponse:
        r"""Search for random Fact which has the text in the query, for a given category(optional) and subcategory(optional).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/fact/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFactSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    