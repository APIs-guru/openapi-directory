import requests
from sdk.models import operations
from . import utils

class Purchases:
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

    
    def androidpublisher_purchases_cancel(self, request: operations.AndroidpublisherPurchasesCancelRequest) -> operations.AndroidpublisherPurchasesCancelResponse:
        r"""Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/subscriptions/{subscriptionId}/purchases/{token}/cancel", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherPurchasesCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidpublisher_purchases_get(self, request: operations.AndroidpublisherPurchasesGetRequest) -> operations.AndroidpublisherPurchasesGetResponse:
        r"""Checks whether a user's subscription purchase is valid and returns its expiry time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/subscriptions/{subscriptionId}/purchases/{token}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherPurchasesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    