import requests
from sdk.models import operations
from . import utils

class Sms:
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

    
    def list_user_s_subscription_group_sms(self, request: operations.ListUserSSubscriptionGroupSmsRequest) -> operations.ListUserSSubscriptionGroupSmsResponse:
        r"""List User's Subscription Group - SMS
        Use the endpoint below to list and get the subscription groups of a certain user.
        
        > If there are multiple users (multiple external ids) who share the same email address, all users will be returned as a separate user (even if they have the same email address or subscription group).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/subscription/user/status"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUserSSubscriptionGroupSmsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def list_user_s_subscription_group_status_sms(self, request: operations.ListUserSSubscriptionGroupStatusSmsRequest) -> operations.ListUserSSubscriptionGroupStatusSmsResponse:
        r"""List User's  Subscription Group Status - SMS
        Use the endpoint below to get the subscription state of a user in a subscription group. The response from this endpoint will include the external ID and either subscribed, unsubscribed, or unknown for the specific subscription group requested in the API call. This can be used to update the subscription group state in subsequent API calls or to be displayed on a hosted web page.
        
        > *Either `external_id` or `email` are required.
        
        ## Response
        
        All successful responses will return `subscribed`, `unsubscribed`, or `unknown` depending on status and user history with the subscription group.
        
        ```json
        Content-Type: application/json
        Authorization: Bearer YOUR-REST-API-KEY
        {
          \"status\": {
            \"1\": \"Unsubscribed\",
            \"2\": \"Subscribed\"
          },
          \"message\": \"success\"
        }
        ```
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/subscription/status/get"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUserSSubscriptionGroupStatusSmsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    