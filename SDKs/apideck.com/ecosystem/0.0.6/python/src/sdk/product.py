import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Product:
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

    
    def product_listings_all(self, request: operations.ProductListingsAllRequest) -> operations.ProductListingsAllResponse:
        r"""List product listings
        List product listings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ecosystems/{ecosystem_id}/products/{id}/listings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductListingsAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetListingsResponse])
                res.get_listings_response = out

        return res

    
    def products_all(self, request: operations.ProductsAllRequest) -> operations.ProductsAllResponse:
        r"""List products
        List products
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ecosystems/{ecosystem_id}/products", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductsAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetProductsResponse])
                res.get_products_response = out

        return res

    
    def products_one(self, request: operations.ProductsOneRequest) -> operations.ProductsOneResponse:
        r"""Get product
        Get product
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ecosystems/{ecosystem_id}/products/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductsOneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetProductResponse])
                res.get_product_response = out

        return res

    