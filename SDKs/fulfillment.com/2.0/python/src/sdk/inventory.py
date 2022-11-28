import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Inventory:
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

    
    def get_inventory(self, request: operations.GetInventoryRequest) -> operations.GetInventoryResponse:
        r"""List of Item Inventories
        Retrieve inventory for one or more items. This API requires elevated permissions, please speak to your success manager.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/inventory"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInventoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetInventoryItemInventoryArrayV2])
                res.item_inventory_array_v2 = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneordersGetResponses404ContentApplication1jsonSchema])
                res.oneorders_get_responses_404_content_application_1json_schema = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneordersGetResponses404ContentApplication1jsonSchema])
                res.oneorders_get_responses_404_content_application_1json_schema = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneordersGetResponses404ContentApplication1jsonSchema])
                res.oneorders_get_responses_404_content_application_1json_schema = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneordersGetResponses404ContentApplication1jsonSchema])
                res.oneorders_get_responses_404_content_application_1json_schema = out

        return res

    