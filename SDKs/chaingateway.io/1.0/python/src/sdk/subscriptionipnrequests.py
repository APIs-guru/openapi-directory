import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class SubscriptionIpnRequests:
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

    
    def list_failed_ip_ns(self, request: operations.ListFailedIPNsRequest) -> operations.ListFailedIPNsResponse:
        r"""listFailedIPNs
        Returns all subscriptions/IPNs created with an account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listFailedIPNs"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFailedIPNsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFailedIPNs])
                res.list_failed_ip_ns = out

        return res

    
    def list_subscribed_addresses(self, request: operations.ListSubscribedAddressesRequest) -> operations.ListSubscribedAddressesResponse:
        r"""listSubscribedAddresses
        Returns all subscriptions/IPNs created with an account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listSubscribedAddresses"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSubscribedAddressesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSubscribedAddresses])
                res.list_subscribed_addresses = out

        return res

    
    def resend_failed_ipn(self, request: operations.ResendFailedIpnRequest) -> operations.ResendFailedIpnResponse:
        r"""resendFailedIPN
        Returns all subscriptions/IPNs created with an account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/resendFailedIPN"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ResendFailedIpnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResendFailedIpn])
                res.resend_failed_ipn = out

        return res

    
    def subscribe_address(self, request: operations.SubscribeAddressRequest) -> operations.SubscribeAddressResponse:
        r"""subscribeAddress
        Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/subscribeAddress"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SubscribeAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscribeAddress])
                res.subscribe_address = out

        return res

    
    def unsubscribe_address(self, request: operations.UnsubscribeAddressRequest) -> operations.UnsubscribeAddressResponse:
        r"""unsubscribeAddress
        Deletes an existing subscription/IPN for the given address (and contractaddress).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/unsubscribeAddress"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UnsubscribeAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnsubscribeAddress])
                res.unsubscribe_address = out

        return res

    