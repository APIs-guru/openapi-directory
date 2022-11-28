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

    
    def androidpublisher_purchases_products_get(self, request: operations.AndroidpublisherPurchasesProductsGetRequest) -> operations.AndroidpublisherPurchasesProductsGetResponse:
        r"""Checks the purchase and consumption status of an inapp item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/purchases/products/{productId}/tokens/{token}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherPurchasesProductsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_purchases_subscriptions_cancel(self, request: operations.AndroidpublisherPurchasesSubscriptionsCancelRequest) -> operations.AndroidpublisherPurchasesSubscriptionsCancelResponse:
        r"""Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:cancel", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherPurchasesSubscriptionsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidpublisher_purchases_subscriptions_defer(self, request: operations.AndroidpublisherPurchasesSubscriptionsDeferRequest) -> operations.AndroidpublisherPurchasesSubscriptionsDeferResponse:
        r"""Defers a user's subscription purchase until a specified future expiration time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:defer", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherPurchasesSubscriptionsDeferResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_purchases_subscriptions_get(self, request: operations.AndroidpublisherPurchasesSubscriptionsGetRequest) -> operations.AndroidpublisherPurchasesSubscriptionsGetResponse:
        r"""Checks whether a user's subscription purchase is valid and returns its expiry time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherPurchasesSubscriptionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_purchases_subscriptions_refund(self, request: operations.AndroidpublisherPurchasesSubscriptionsRefundRequest) -> operations.AndroidpublisherPurchasesSubscriptionsRefundResponse:
        r"""Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:refund", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherPurchasesSubscriptionsRefundResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidpublisher_purchases_subscriptions_revoke(self, request: operations.AndroidpublisherPurchasesSubscriptionsRevokeRequest) -> operations.AndroidpublisherPurchasesSubscriptionsRevokeResponse:
        r"""Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:revoke", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherPurchasesSubscriptionsRevokeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidpublisher_purchases_voidedpurchases_list(self, request: operations.AndroidpublisherPurchasesVoidedpurchasesListRequest) -> operations.AndroidpublisherPurchasesVoidedpurchasesListResponse:
        r"""Lists the purchases that were canceled, refunded or charged-back.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{packageName}/purchases/voidedpurchases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherPurchasesVoidedpurchasesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    