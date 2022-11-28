import requests
from typing import Optional
from sdk.models import shared, operations
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
        r"""Deletes an in-app product (i.e. a managed product or a subscriptions).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/inappproducts/{sku}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherInappproductsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidpublisher_inappproducts_get(self, request: operations.AndroidpublisherInappproductsGetRequest) -> operations.AndroidpublisherInappproductsGetResponse:
        r"""Gets an in-app product, which can be a managed product or a subscription.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/inappproducts/{sku}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherInappproductsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InAppProduct])
                res.in_app_product = out

        return res

    
    def androidpublisher_inappproducts_insert(self, request: operations.AndroidpublisherInappproductsInsertRequest) -> operations.AndroidpublisherInappproductsInsertResponse:
        r"""Creates an in-app product (i.e. a managed product or a subscriptions).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/inappproducts", request.path_params)
        
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
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InAppProduct])
                res.in_app_product = out

        return res

    
    def androidpublisher_inappproducts_list(self, request: operations.AndroidpublisherInappproductsListRequest) -> operations.AndroidpublisherInappproductsListResponse:
        r"""Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/inappproducts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherInappproductsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InappproductsListResponse])
                res.inappproducts_list_response = out

        return res

    
    def androidpublisher_inappproducts_patch(self, request: operations.AndroidpublisherInappproductsPatchRequest) -> operations.AndroidpublisherInappproductsPatchResponse:
        r"""Patches an in-app product (i.e. a managed product or a subscriptions).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/inappproducts/{sku}", request.path_params)
        
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
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InAppProduct])
                res.in_app_product = out

        return res

    
    def androidpublisher_inappproducts_update(self, request: operations.AndroidpublisherInappproductsUpdateRequest) -> operations.AndroidpublisherInappproductsUpdateResponse:
        r"""Updates an in-app product (i.e. a managed product or a subscriptions).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/inappproducts/{sku}", request.path_params)
        
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
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InAppProduct])
                res.in_app_product = out

        return res

    