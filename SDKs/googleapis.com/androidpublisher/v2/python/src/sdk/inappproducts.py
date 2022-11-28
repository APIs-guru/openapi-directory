import requests
from sdk.models import operations
from . import utils

class Inappproducts:
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

    
    def androidpublisher_inappproducts_delete(self, request: operations.AndroidpublisherInappproductsDeleteRequest) -> operations.AndroidpublisherInappproductsDeleteResponse:
        r"""Delete an in-app product for an app.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/inappproducts/{sku}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherInappproductsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidpublisher_inappproducts_get(self, request: operations.AndroidpublisherInappproductsGetRequest) -> operations.AndroidpublisherInappproductsGetResponse:
        r"""Returns information about the in-app product specified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/inappproducts/{sku}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherInappproductsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_inappproducts_insert(self, request: operations.AndroidpublisherInappproductsInsertRequest) -> operations.AndroidpublisherInappproductsInsertResponse:
        r"""Creates a new in-app product for an app.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/inappproducts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherInappproductsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_inappproducts_list(self, request: operations.AndroidpublisherInappproductsListRequest) -> operations.AndroidpublisherInappproductsListResponse:
        r"""List all the in-app products for an Android app, both subscriptions and managed in-app products..
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/inappproducts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherInappproductsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_inappproducts_patch(self, request: operations.AndroidpublisherInappproductsPatchRequest) -> operations.AndroidpublisherInappproductsPatchResponse:
        r"""Updates the details of an in-app product. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/inappproducts/{sku}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherInappproductsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_inappproducts_update(self, request: operations.AndroidpublisherInappproductsUpdateRequest) -> operations.AndroidpublisherInappproductsUpdateResponse:
        r"""Updates the details of an in-app product.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/inappproducts/{sku}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherInappproductsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    