import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Storelayoutclusters:
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

    
    def androidenterprise_storelayoutclusters_delete(self, request: operations.AndroidenterpriseStorelayoutclustersDeleteRequest) -> operations.AndroidenterpriseStorelayoutclustersDeleteResponse:
        r"""Deletes a cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseStorelayoutclustersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidenterprise_storelayoutclusters_get(self, request: operations.AndroidenterpriseStorelayoutclustersGetRequest) -> operations.AndroidenterpriseStorelayoutclustersGetResponse:
        r"""Retrieves details of a cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseStorelayoutclustersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StoreCluster])
                res.store_cluster = out

        return res

    
    def androidenterprise_storelayoutclusters_insert(self, request: operations.AndroidenterpriseStorelayoutclustersInsertRequest) -> operations.AndroidenterpriseStorelayoutclustersInsertResponse:
        r"""Inserts a new cluster in a page.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseStorelayoutclustersInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StoreCluster])
                res.store_cluster = out

        return res

    
    def androidenterprise_storelayoutclusters_list(self, request: operations.AndroidenterpriseStorelayoutclustersListRequest) -> operations.AndroidenterpriseStorelayoutclustersListResponse:
        r"""Retrieves the details of all clusters on the specified page.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseStorelayoutclustersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StoreLayoutClustersListResponse])
                res.store_layout_clusters_list_response = out

        return res

    
    def androidenterprise_storelayoutclusters_update(self, request: operations.AndroidenterpriseStorelayoutclustersUpdateRequest) -> operations.AndroidenterpriseStorelayoutclustersUpdateResponse:
        r"""Updates a cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseStorelayoutclustersUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StoreCluster])
                res.store_cluster = out

        return res

    