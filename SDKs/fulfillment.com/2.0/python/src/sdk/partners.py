import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Partners:
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

    
    def put_orders_id_ship(self, request: operations.PutOrdersIDShipRequest) -> operations.PutOrdersIDShipResponse:
        r"""Ship an Order
        Note, this API is used to update orders and is reserved for our shipping partners.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orders/{id}/ship", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutOrdersIDShipResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneordersPostResponses201ContentApplication1jsonSchema])
                res.oneorders_post_responses_201_content_application_1json_schema = out
        elif r.status_code == 404:
            pass

        return res

    
    def put_orders_id_status(self, request: operations.PutOrdersIDStatusRequest) -> operations.PutOrdersIDStatusResponse:
        r"""Update Order Status
        Note, this API is used to update orders and is reserved for our shipping partners.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orders/{id}/status", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutOrdersIDStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneordersPostResponses201ContentApplication1jsonSchema])
                res.oneorders_post_responses_201_content_application_1json_schema = out
        elif r.status_code == 404:
            pass

        return res

    