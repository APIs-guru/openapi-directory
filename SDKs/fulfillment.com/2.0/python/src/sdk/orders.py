import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Orders:
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

    
    def delete_orders_id(self, request: operations.DeleteOrdersIDRequest) -> operations.DeleteOrdersIDResponse:
        r"""Cancel an Order
        Request an order is canceled to prevent shipment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orders/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrdersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneordersPostResponses201ContentApplication1jsonSchema])
                res.oneorders_post_responses_201_content_application_1json_schema = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneordersGetResponses404ContentApplication1jsonSchema])
                res.oneorders_get_responses_404_content_application_1json_schema = out

        return res

    
    def get_orders(self, request: operations.GetOrdersRequest) -> operations.GetOrdersResponse:
        r"""List of Orders
        Retrieve many orders at once
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/orders"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrdersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.order_response_one_of_v2 = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetOrdersErrorStandardV2])
                res.error_standard_v2 = out

        return res

    
    def get_order(self, request: operations.GetOrderRequest) -> operations.GetOrderResponse:
        r"""Order Details
        For the fastest results use the FDC provided `id` however you can use your `merchantOrderId` as the `id`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orders/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.oneorders_get_responses_200_content_application_1json_schema = out
        elif r.status_code == 404:
            pass

        return res

    
    def post_orders(self, request: operations.PostOrdersRequest) -> operations.PostOrdersResponse:
        r"""New Order
        Error Notes&#58;
        * When `409 Conflict` is a 'Duplicate Order' the `context` will include the FDC `id`, see samples.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/orders"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOrdersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostOrdersOrderResponseV2])
                res.order_response_v2 = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneordersGetResponses404ContentApplication1jsonSchema])
                res.oneorders_get_responses_404_content_application_1json_schema = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneordersGetResponses404ContentApplication1jsonSchema])
                res.oneorders_get_responses_404_content_application_1json_schema = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostOrdersErrorStandardWithContextV2])
                res.error_standard_with_context_v2 = out

        return res

    