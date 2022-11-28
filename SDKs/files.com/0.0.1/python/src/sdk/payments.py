import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Payments:
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

    
    def get_payments(self, request: operations.GetPaymentsRequest) -> operations.GetPaymentsResponse:
        r"""List Payments
        List Payments
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/payments"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AccountLineItemEntity]])
                res.account_line_item_entities = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 412:
            pass
        elif r.status_code == 422:
            pass
        elif r.status_code == 423:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_payments_id(self, request: operations.GetPaymentsIDRequest) -> operations.GetPaymentsIDResponse:
        r"""Show Payment
        Show Payment
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/payments/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountLineItemEntity])
                res.account_line_item_entity = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 412:
            pass
        elif r.status_code == 422:
            pass
        elif r.status_code == 423:
            pass
        elif r.status_code == 429:
            pass

        return res

    