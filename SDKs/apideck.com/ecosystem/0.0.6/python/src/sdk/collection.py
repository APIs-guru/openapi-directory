import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Collection:
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

    
    def collection_listings_all(self, request: operations.CollectionListingsAllRequest) -> operations.CollectionListingsAllResponse:
        r"""List collection listings
        List collection listings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ecosystems/{ecosystem_id}/collections/{id}/listings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionListingsAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetListingsResponse])
                res.get_listings_response = out

        return res

    
    def collections_all(self, request: operations.CollectionsAllRequest) -> operations.CollectionsAllResponse:
        r"""List collections
        List collections
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ecosystems/{ecosystem_id}/collections", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCollectionsResponse])
                res.get_collections_response = out

        return res

    
    def collections_one(self, request: operations.CollectionsOneRequest) -> operations.CollectionsOneResponse:
        r"""Get collection
        Get collection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ecosystems/{ecosystem_id}/collections/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsOneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCollectionResponse])
                res.get_collection_response = out

        return res

    