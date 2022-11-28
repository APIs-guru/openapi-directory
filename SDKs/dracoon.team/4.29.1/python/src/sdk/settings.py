import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Settings:
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

    
    def create_and_preserve_key_pair(self, request: operations.CreateAndPreserveKeyPairRequest) -> operations.CreateAndPreserveKeyPairResponse:
        r"""Create system rescue key pair and preserve copy of old private key
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
        
        ### Description:  
        Create system rescue key pair and preserve copy of old private key.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> and
        role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> required.
        
        ### Postcondition:
        System rescue key pair is created.  
        Copy of old private key is preserved.
        
        ### Further Information:
        You can submit your old private key, encrypted with your current password.  
        This allows migrating file keys encrypted with your old key pair to the new one.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/settings/keypairs"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAndPreserveKeyPairResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def create_webhook(self, request: operations.CreateWebhookRequest) -> operations.CreateWebhookResponse:
        r"""Create webhook
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
        
        ### Description:  
        Create a new webhook for the customer scope.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.
        
        ### Postcondition:
        Webhook is created for given event types.
        
        ### Further Information:
        URL must begin with the `HTTPS` scheme.  
        Webhook names are limited to 150 characters.
        
        ### Available event types:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Name | Description | Scope |
        | :--- | :--- | :--- |
        | **`user.created`** | Triggered when a new user is created | Customer Admin Webhook |
        | **`user.deleted`** | Triggered when a user is deleted | Customer Admin Webhook |
        | **`user.locked`** | Triggered when a user gets locked | Customer Admin Webhook |
        |  |  |  |
        | **`webhook.expiring`** | Triggered 30/20/10/1 days before a webhook expires |  Customer Admin Webhook |
        |  |  |  |
        | **`downloadshare.created`** | Triggered when a new download share is created in affected room | Node Webhook |
        | **`downloadshare.deleted`** | Triggered when a download share is deleted in affected room | Node Webhook |
        | **`downloadshare.used`** | Triggered when a download share is utilized in affected room | Node Webhook |
        | **`uploadshare.created`** | Triggered when a new upload share is created in affected room | Node Webhook |
        | **`uploadshare.deleted`** | Triggered when a upload share is deleted in affected room | Node Webhook |
        | **`uploadshare.used`** | Triggered when a new file is uploaded via the upload share in affected room | Node Webhook |
        | **`file.created`** | Triggered when a new file is uploaded in affected room | Node Webhook |
        | **`folder.created`** | Triggered when a new folder is created in affected room | Node Webhook |
        | **`room.created`** | Triggered when a new room is created (in affected room) | Node Webhook |
        | **`file.deleted`** | Triggered when a file is deleted in affected room | Node Webhook |
        | **`folder.deleted`** | Triggered when a folder is deleted in affected room | Node Webhook |
        | **`room.deleted`** | Triggered when a room is deleted in affected room | Node Webhook |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/settings/webhooks"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Webhook])
                res.webhook = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def remove_system_rescue_key_pair(self, request: operations.RemoveSystemRescueKeyPairRequest) -> operations.RemoveSystemRescueKeyPairResponse:
        r"""Remove system rescue key pair
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
        
        ### Description:  
        Remove the system rescue key pair.
        
        ### Precondition:
        * Authenticated user
        * Existence of own key pair
        
        ### Postcondition:
        Key pair is removed (cf. further information below).
        
        ### Further Information:
        Please set a new system rescue key pair first and re-encrypt file keys with it.  
        If no version is set, deleted key pair with lowest preference value.  
        Although, `version` **SHOULD** be set.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/settings/keypair"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveSystemRescueKeyPairResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def remove_webhook(self, request: operations.RemoveWebhookRequest) -> operations.RemoveWebhookResponse:
        r"""Remove webhook
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
        
        ### Description:  
        Delete a webhook for the customer scope.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.
        
        ### Postcondition:
        Webhook is deleted.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/settings/webhooks/{webhook_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_all_system_rescue_key_pairs(self, request: operations.RequestAllSystemRescueKeyPairsRequest) -> operations.RequestAllSystemRescueKeyPairsResponseOutput:
        r"""Request all system rescue key pairs
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
        
        ### Description:  
        Retrieve all system rescue key pairs to allow migrating system-rescue-key-encrypted file keys.
        
        ### Precondition:
        * Authenticated user
        * Existence of own key pair
        
        ### Postcondition:
        List of key pairs is returned.
        
        ### Further Information:
        In the case of an algorithm migration of a system rescue key, one should create the new key pair before deleting the old one.  
        This allows re-encrypting file keys with the new key pair, using the old one.  
        
        This API allows to retrieve both key pairs, in contrast to `GET /settings/keypair`, which only delivers the preferred one.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/settings/keypairs"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestAllSystemRescueKeyPairsResponseOutput(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserKeyPairContainerOutput]])
                res.user_key_pair_containers = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_list_of_event_types_for_config_manager(self, request: operations.RequestListOfEventTypesForConfigManagerRequest) -> operations.RequestListOfEventTypesForConfigManagerResponse:
        r"""Request list of event types
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
        
        ### Description:  
        Get a list of available (for <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span>) event types.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.
        
        ### Postcondition:
        List of available event types is returned.
        
        ### Further Information:
        None.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/settings/webhooks/event_types"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestListOfEventTypesForConfigManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventTypeList])
                res.event_type_list = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_list_of_webhooks(self, request: operations.RequestListOfWebhooksRequest) -> operations.RequestListOfWebhooksResponse:
        r"""Request list of webhooks
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
        
        ### Description:  
        Get a list of webhooks for the customer scope.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.
        
        ### Postcondition:
        List of webhooks is returned.
        
        ### Filtering:
        All filter fields are connected via logical conjunction (**AND**)  
        Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `name:cn:goo|createdAt:ge:2015-01-01`  
        Get webhooks where name contains `goo` **AND** webhook creation date is **>=** `2015-01-01`.
        
        </details>
        
        ### Filtering options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
        | :--- | :--- | :--- | :--- | :--- |
        | **`id`** | Webhook id filter | `eq` | Webhook id equals value.<br>Multiple values are allowed and will be connected via logical disjunction (**OR**). |`positive number`|
        | **`name`** | Webhook type name| `cn, eq` | Webhook name contains / equals value. | `search String` |
        | **`isEnabled`** | Webhook isEnabled filter | `eq` |  | `true or false` |
        | **`createdAt`** | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
        | **`updatedAt`** | Last modification date filter | `ge, le` | Last modification date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `updatedAt:ge:2016-12-31`&#124;`updatedAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
        | **`expiration`** | Expiration date filter | `ge, le, eq` | Expiration date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `expiration:ge:2016-12-31`&#124;`expiration:le:2018-01-01` | `Date (yyyy-MM-dd)` |
        | **`lastFailStatus`** | Failure status filter | `eq` | Last HTTP status code. Set when a webhook is auto-disabled due to repeated delivery failures |`positive number`|
        
        </details>
        
        ---
        
        ### Sorting:
        Sort string syntax: `FIELD_NAME:ORDER`  
        `ORDER` can be `asc` or `desc`.  
        Multiple sort criteria are possible.  
        Fields are connected via logical conjunction **AND**.
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `name:desc|isEnabled:asc`  
        Sort by `name` descending and `isEnabled` ascending.
        
        </details>
        
        ### Sorting options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Description |
        | :--- | :--- |
        | **`id`** | Webhook id |
        | **`name`** | Webhook name |
        | **`isEnabled`** | Webhook isEnabled |
        | **`createdAt`** | Creation date |
        | **`updatedAt`** | Last modification date |
        | **`expiration`** | Expiration date |
        
        </details>
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/settings/webhooks"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestListOfWebhooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebhookList])
                res.webhook_list = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_notification_channels(self, request: operations.RequestNotificationChannelsRequest) -> operations.RequestNotificationChannelsResponse:
        r"""Request list of notification channels
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
        
        ### Description:  
        Retrieve a list of configured notification channels.
        
        ### Precondition:
        Right _\"change config\"_ required.
        
        ### Postcondition:
        List of notification channels is returned.
        
        ### Further Information:
        None.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/settings/notifications/channels"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestNotificationChannelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotificationChannelList])
                res.notification_channel_list = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_settings(self, request: operations.RequestSettingsRequest) -> operations.RequestSettingsResponse:
        r"""Request customer settings
        ### Description:  
        Retrieve customer related settings. 
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read config</span> required.
        
        ### Postcondition:
        List of available settings is returned.
        
        ### Further Information:
        None.
        
        ### Configurable customer settings:
        <details open style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Setting | Description | Value |
        | :--- | :--- | :--- |
        | `homeRoomParentName` | Name of the container in which all user's home rooms are located.<br>`null` if `homeRoomsActive` is `false`. | `String` |
        | `homeRoomQuota` | Refers to the quota of each single user's home room.<br>`0` represents no quota.<br>`null` if `homeRoomsActive` is `false`. | `positive Long` |
        | `homeRoomsActive` | If set to `true`, every user with an Active Directory account gets a personal homeroom.<br>Once activated, this **CANNOT** be deactivated. | `true or false` |
        
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/settings"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerSettingsResponse])
                res.customer_settings_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_system_rescue_key_pair(self, request: operations.RequestSystemRescueKeyPairRequest) -> operations.RequestSystemRescueKeyPairResponseOutput:
        r"""Request system rescue key pair
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
        
        ### Description:  
        Retrieve the system rescue key pair.
        
        ### Precondition:
        * Authenticated user
        * Existence of own key pair
        
        ### Postcondition:
        Key pair is returned.
        
        ### Further Information:
        If more than one key pair exists the one with highest preference value is returned.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/settings/keypair"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestSystemRescueKeyPairResponseOutput(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserKeyPairContainerOutput])
                res.user_key_pair_container = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_webhook(self, request: operations.RequestWebhookRequest) -> operations.RequestWebhookResponse:
        r"""Request webhook
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
        
        ### Description:  
        Get a specific webhook for the customer scope.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.
        
        ### Postcondition:
        Webhook is returned.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/settings/webhooks/{webhook_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Webhook])
                res.webhook = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def reset_webhook_lifetime(self, request: operations.ResetWebhookLifetimeRequest) -> operations.ResetWebhookLifetimeResponse:
        r"""Reset webhook lifetime
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
        
        ### Description:  
        Reset the lifetime of a webhook for the customer scope.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.
        
        ### Postcondition:
        Lifetime of the webhook is reset.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/settings/webhooks/{webhook_id}/reset_lifetime", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ResetWebhookLifetimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Webhook])
                res.webhook = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def set_settings(self, request: operations.SetSettingsRequest) -> operations.SetSettingsResponse:
        r"""Set customer settings
        ### Description:  
        Set customer related settings.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
        role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> required.
        
        ### Postcondition:
        Provided settings are updated.
        
        ### Further Information:
        None.
        
        ### Configurable customer settings
        <details open style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Setting | Description | Value |
        | :--- | :--- | :--- |
        | `homeRoomParentName` | Name of the container in which all user's home rooms are located.<br>`null` if `homeRoomsActive` is `false`. | `String` |
        | `homeRoomQuota` | Refers to the quota of each single user's home room.<br>`0` represents no quota.<br>`null` if `homeRoomsActive` is `false`. | `positive Long` |
        | `homeRoomsActive` | If set to `true`, every user with an Active Directory account gets a personal homeroom.<br>Once activated, this **CANNOT** be deactivated. | `true or false` |
        
        </details>
        
        ### Node naming convention:
        * Node (room, folder, file) names are limited to **150** characters.
        * Illegal names:  
        `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
        * Illegal characters in names:  
        `'\\', '<','>', ':', '\\"', '|', '?', '*', '/', leading '-', trailing '.' `
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/settings"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerSettingsResponse])
                res.customer_settings_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def set_system_rescue_key_pair(self, request: operations.SetSystemRescueKeyPairRequest) -> operations.SetSystemRescueKeyPairResponse:
        r"""Activate client-side encryption for customer
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
        
        ### Description:  
        Set the system rescue key pair and activate client-side encryption for according customer.
        
        ### Precondition:
        Role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> required.
        
        ### Postcondition:
        System rescue key pair is set and client-side encryption is enabled.
        
        ### Further Information:
        Sets the ability for this customer to encrypt rooms.  
        Once enabled on customer level, it **CANNOT** be unset.  
        On activation, a customer rescue key pair **MUST** be set.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/settings/keypair"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetSystemRescueKeyPairResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def toggle_notification_channels(self, request: operations.ToggleNotificationChannelsRequest) -> operations.ToggleNotificationChannelsResponse:
        r"""Toggle notification channels
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
        
        ### Description:  
        Toggle configured notification channels.
        
        ### Precondition:
        Right _\"change config\"_ required.
        
        ### Postcondition:
        Channel status is switched.
        
        ### Further Information:
        None.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/settings/notifications/channels"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ToggleNotificationChannelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotificationChannelList])
                res.notification_channel_list = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def update_webhook(self, request: operations.UpdateWebhookRequest) -> operations.UpdateWebhookResponse:
        r"""Update webhook
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
        
        ### Description:  
        Update an existing webhook for the customer scope.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.
        
        ### Postcondition:
        Webhook is updated.
        
        ### Further Information:
        URL must begin with the `HTTPS` scheme.
        Webhook names are limited to 150 characters.
        Webhook event types can not be changed from Customer Admin Webhook types to Node Webhook types and vice versa  
        
        ### Available event types:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Name | Description | Scope |
        | :--- | :--- | :--- |
        | **`user.created`** | Triggered when a new user is created | Customer Admin Webhook |
        | **`user.deleted`** | Triggered when a user is deleted | Customer Admin Webhook |
        | **`user.locked`** | Triggered when a user gets locked | Customer Admin Webhook |
        |  |  |  |
        | **`webhook.expiring`** | Triggered 30/20/10/1 days before a webhook expires |  Customer Admin Webhook |
        |  |  |  |
        | **`downloadshare.created`** | Triggered when a new download share is created in affected room | Node Webhook |
        | **`downloadshare.deleted`** | Triggered when a download share is deleted in affected room | Node Webhook |
        | **`downloadshare.used`** | Triggered when a download share is utilized in affected room | Node Webhook |
        | **`uploadshare.created`** | Triggered when a new upload share is created in affected room | Node Webhook |
        | **`uploadshare.deleted`** | Triggered when a upload share is deleted in affected room | Node Webhook |
        | **`uploadshare.used`** | Triggered when a new file is uploaded via the upload share in affected room | Node Webhook |
        | **`file.created`** | Triggered when a new file is uploaded in affected room | Node Webhook |
        | **`folder.created`** | Triggered when a new folder is created in affected room | Node Webhook |
        | **`room.created`** | Triggered when a new room is created (in affected room) | Node Webhook |
        | **`file.deleted`** | Triggered when a file is deleted in affected room | Node Webhook |
        | **`folder.deleted`** | Triggered when a folder is deleted in affected room | Node Webhook |
        | **`room.deleted`** | Triggered when a room is deleted in affected room | Node Webhook |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/settings/webhooks/{webhook_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Webhook])
                res.webhook = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    