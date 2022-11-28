import requests
from typing import Any,List,Optional
from sdk.models import operations
from . import utils

class V1Product:
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

    
    def product_availability(self, request: operations.ProductAvailabilityRequest) -> operations.ProductAvailabilityResponse:
        r"""Retrieves a document availability result
        Check availability and valid options for a particular product for a particular company identfied by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/product/availability/{sku}/{subjectId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductAvailabilityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_availability_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_availability_default_application_json_any = out

        return res

    
    def product_catalog(self, request: operations.ProductCatalogRequest) -> operations.ProductCatalogResponse:
        r"""Returns a catalog of products
        Returns a catalog of purchasable products available with some metadata for a particular country
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/product/catalog/{country}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductCatalogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_catalog_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_catalog_default_application_json_any = out

        return res

    
    def product_notifier(self, request: operations.ProductNotifierRequest) -> operations.ProductNotifierResponse:
        r"""Returns metadata for a notifier
        Queries and returns all metadata associated with a notifier identified by its notifer id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/product/notifier/{notifierId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductNotifierResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_notifier_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_notifier_default_application_json_any = out

        return res

    
    def product_notifier_create(self, request: operations.ProductNotifierCreateRequest) -> operations.ProductNotifierCreateResponse:
        r"""Creates a notifier for an order
        Create a notifier for a particular order. Parameters can be supplied in the path
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/product/notifier/{orderId}/{type}/{uri}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductNotifierCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_notifier_create_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_notifier_create_default_application_json_any = out

        return res

    
    def product_order(self, request: operations.ProductOrderRequest) -> operations.ProductOrderResponse:
        r"""Places a product order
        Place an order for a particular product identified by its SKU for a particular company identified by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/product/order/{sku}/{subjectId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductOrderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_order_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_order_default_application_json_any = out

        return res

    
    def product_order_concierge(self, request: operations.ProductOrderConciergeRequest) -> operations.ProductOrderConciergeResponse:
        r"""Places a concierge order
        Place an order for a concierge product
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/product/order/concierge"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductOrderConciergeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_order_concierge_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_order_concierge_default_application_json_any = out

        return res

    
    def product_order_ubo(self, request: operations.ProductOrderUboRequest) -> operations.ProductOrderUboResponse:
        r"""Places a UBO order
        Place an order for a UBO (ultimate beneficial owner) discovery report
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/product/order/ubo"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductOrderUboResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_order_ubo_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_order_ubo_default_application_json_any = out

        return res

    
    def product_order_with_option(self, request: operations.ProductOrderWithOptionRequest) -> operations.ProductOrderWithOptionResponse:
        r"""Places a product order
        Place an order for a particular product identified by its SKU with a particular option for a particular company identified by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/product/order/{sku}/{option}/{subjectId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductOrderWithOptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_order_with_option_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_order_with_option_default_application_json_any = out

        return res

    
    def product_retrieve(self, request: operations.ProductRetrieveRequest) -> operations.ProductRetrieveResponse:
        r"""Retrieves the result of an order
        Retrieves the document or structured data associated with a completed order identified with its order id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/product/{orderId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductRetrieveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_retrieve_200_application_json_one_of = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_retrieve_default_application_json_any = out

        return res

    
    def product_search(self, request: operations.ProductSearchRequest) -> operations.ProductSearchResponse:
        r"""Returns a list of products
        Search for possible products for a particular company identified by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/product/search/{subjectId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.product_search_200_application_json_anies = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_search_default_application_json_any = out

        return res

    
    def product_status(self, request: operations.ProductStatusRequest) -> operations.ProductStatusResponse:
        r"""Returns metadata for a order
        Retrieve the current status of an order identified by its order id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/product/status/{orderId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_status_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_status_default_application_json_any = out

        return res

    
    def product_update_action(self, request: operations.ProductUpdateActionRequest) -> operations.ProductUpdateActionResponse:
        r"""Updates metadata of an order
        Update an existing order identified by its order id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/product/update/{action}/{orderId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductUpdateActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_update_action_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.product_update_action_default_application_json_any = out

        return res

    