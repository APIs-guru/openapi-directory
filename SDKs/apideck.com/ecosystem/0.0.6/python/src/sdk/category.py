import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Category:
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

    
    def categories_all(self, request: operations.CategoriesAllRequest) -> operations.CategoriesAllResponse:
        r"""List categories
        List categories
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ecosystems/{ecosystem_id}/categories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CategoriesAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCategoriesResponse])
                res.get_categories_response = out

        return res

    
    def categories_one(self, request: operations.CategoriesOneRequest) -> operations.CategoriesOneResponse:
        r"""Get category
        Get category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ecosystems/{ecosystem_id}/categories/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CategoriesOneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCategoryResponse])
                res.get_category_response = out

        return res

    
    def category_listings_all(self, request: operations.CategoryListingsAllRequest) -> operations.CategoryListingsAllResponse:
        r"""List category listings
        List category listings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ecosystems/{ecosystem_id}/categories/{id}/listings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CategoryListingsAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetListingsResponse])
                res.get_listings_response = out

        return res

    