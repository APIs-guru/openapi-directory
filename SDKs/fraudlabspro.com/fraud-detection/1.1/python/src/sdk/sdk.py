

import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"https://api.fraudlabspro.com",
	"https://virtserver.swaggerhub.com/fraudlabspro/fraudlabspro/1.0",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def post_v1_order_feedback(self, request: operations.PostV1OrderFeedbackRequest) -> operations.PostV1OrderFeedbackResponse:
        r"""Feedback the status of an order transaction.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/order/feedback"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV1OrderFeedbackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                res.post_v1_order_feedback_200_application_json_string = r.content

        return res

    
    def post_v1_order_screen(self, request: operations.PostV1OrderScreenRequest) -> operations.PostV1OrderScreenResponse:
        r"""Screen order for payment fraud.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/order/screen"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV1OrderScreenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                res.post_v1_order_screen_200_application_json_string = r.content

        return res

    