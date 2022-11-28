import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class User:
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

    
    def change_user_password(self, request: operations.ChangeUserPasswordRequest) -> operations.ChangeUserPasswordResponse:
        r"""Change user's password
        ### Description:
        Change the user's password.
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        User's password is changed.
        
        ### Further Information:
        The password **MUST** comply to configured password policies.  
        
        Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/account/password"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChangeUserPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.change_user_password_400_application_json_one_of = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def create_and_preserve_user_key_pair(self, request: operations.CreateAndPreserveUserKeyPairRequest) -> operations.CreateAndPreserveUserKeyPairResponse:
        r"""Create key pair and preserve copy of old private key
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
        
        ### Description:  
        Create user key pair and preserve copy of old private key.
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        Key pair is created.  
        Copy of old private key is preserved.
        
        ### Further Information:
        You can submit your old private key, encrypted with your current password.  
        This allows migrating file keys encrypted with your old key pair to the new one.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/account/keypairs"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAndPreserveUserKeyPairResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def enable_customer_encryption(self, request: operations.EnableCustomerEncryptionRequest) -> operations.EnableCustomerEncryptionResponse:
        r"""Activate client-side encryption for customer
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.24.0</h3>
        
        ### Use `POST /settings/keypair` API
        
        ### Description:  
        Activate client-side encryption for according customer.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.
        
        ### Postcondition:
        Client-side encryption is enabled.
        
        ### Further Information:
        Sets the ability for this customer to encrypt rooms.  
        Once enabled on customer level, it **CANNOT** be unset.  
        On activation, a customer rescue key pair **MUST** be set.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/account/customer"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnableCustomerEncryptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerData])
                res.customer_data = out
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

    
    def list_download_share_subscriptions(self, request: operations.ListDownloadShareSubscriptionsRequest) -> operations.ListDownloadShareSubscriptionsResponse:
        r"""List Download Share subscriptions
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
        
        ### Description:  
        Retrieve a list of subscribed Download Shares for current user. 
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        List of subscribed Download Shares is returned.
        
        ### Further Information:
        None.
        
        ### Filtering
        All filter fields are connected via logical conjunction (**AND**)  
        Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `authParentId:eq:#`  
        Get download shares where `authParentId` equals `#`.
        
        </details>
        
        ### Filtering options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
        | :--- | :--- | :--- | :--- | :--- |
        | **`downloadShareId`** | Download Share ID filter | `eq` | Download Share ID equals value. | `long value` |
        | **`authParentId`** | Auth parent ID filter | `eq` | Auth parent ID equals value. | `long value` |
        
        </details>
        
        ---
        
        ### Sorting:
        Sort string syntax: `FIELD_NAME:ORDER`  
        `ORDER` can be `asc` or `desc`.  
        Multiple sort criteria are possible.  
        Fields are connected via logical conjunction **AND**.
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `downloadShareId:desc|authParentId:asc`  
        Sort by `downloadShareId` descending **AND** `authParentId` ascending.
        
        </details>
        
        ### Sorting options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Description |
        | :--- | :--- |
        | **`downloadShareId`** | Download Share ID |
        | **`authParentId`** | Auth parent ID |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/subscriptions/download_shares"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDownloadShareSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscribedDownloadShareList])
                res.subscribed_download_share_list = out
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

    
    def list_node_subscriptions(self, request: operations.ListNodeSubscriptionsRequest) -> operations.ListNodeSubscriptionsResponse:
        r"""List node subscriptions
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
        
        ### Description:  
        Retrieve a list of subscribed nodes for current user. 
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        List of subscribed nodes is returned.
        
        ### Further Information:
        None.
        
        ### Filtering:
        All filter fields are connected via logical conjunction (**AND**)  
        Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `authParentId:eq:#`  
        Get nodes where `authParentId` equals `#`.
        
        </details>
        
        ### Filtering options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
        | :--- | :--- | :--- | :--- | :--- |
        | **`nodeId`** | Node ID filter | `eq` | Node ID equals value. | `long value` |
        | **`authParentId`** | Auth parent ID filter | `eq` | Auth parent ID equals value. | `long value` |
        
        </details>
        
        ---
        
        ### Sorting:
        Sort string syntax: `FIELD_NAME:ORDER`  
        `ORDER` can be `asc` or `desc`.  
        Multiple sort criteria are possible.  
        Fields are connected via logical conjunction **AND**.
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `nodeId:desc|authParentId:asc`  
        Sort by `nodeId` descending **AND** `authParentId` ascending.
        
        </details>
        
        ### Sorting options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Description |
        | :--- | :--- |
        | **`nodeId`** | Node ID |
        | **`authParentId`** | Auth parent ID |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/subscriptions/nodes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListNodeSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscribedNodeList])
                res.subscribed_node_list = out
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

    
    def list_upload_share_subscriptions(self, request: operations.ListUploadShareSubscriptionsRequest) -> operations.ListUploadShareSubscriptionsResponse:
        r"""List Upload Share subscriptions
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
        
        ### Description:  
        Retrieve a list of subscribed Upload Shares for current user. 
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        List of subscribed Upload Shares is returned.
        
        ### Further Information:
        None.
        
        ### Filtering
        All filter fields are connected via logical conjunction (**AND**)  
        Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `targetNodeId:eq:#`  
        Get upload shares where `targetNodeId` equals `#`.
        
        </details>
        
        ### Filtering options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
        | :--- | :--- | :--- | :--- | :--- |
        | **`uploadShareId`** | Upload Share ID filter | `eq` | Upload Share ID equals value. | `long value` |
        | **`targetNodeId`** | Target node ID filter | `eq` | Target node ID equals value. | `long value` |
        
        </details>
        
        ---
        
        ### Sorting:
        Sort string syntax: `FIELD_NAME:ORDER`  
        `ORDER` can be `asc` or `desc`.  
        Multiple sort criteria are possible.  
        Fields are connected via logical conjunction **AND**.
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `uploadShareId:desc|targetNodeId:asc`  
        Sort by `uploadShareId` descending **AND** `targetNodeId` ascending.
        
        </details>
        
        ### Sorting options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Description |
        | :--- | :--- |
        | **`uploadShareId`** | Upload Share ID |
        | **`targetNodeId`** | Target node ID |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/subscriptions/upload_shares"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUploadShareSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscribedUploadShareList])
                res.subscribed_upload_share_list = out
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

    
    def logout(self, request: operations.LogoutRequest) -> operations.LogoutResponse:
        r"""Invalidate authentication token
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.12.0</h3>
        
        ### Description:  
        Log out a user.
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        * User is logged out  
        * Authentication token gets invalidated.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/logout"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LogoutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
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

    
    def ping_user(self, request: operations.PingUserRequest) -> operations.PingUserResponse:
        r"""(authenticated) Ping
        ### Description:
        Test connection to DRACOON Server (while authenticated).
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        `200 OK` with principal information is returned if successful.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/ping"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PingUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.ping_user_200_text_plain_string = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def remove_o_auth_approval(self, request: operations.RemoveOAuthApprovalRequest) -> operations.RemoveOAuthApprovalResponse:
        r"""Remove OAuth client approval
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.22.0</h3>
        
        ### Functional Description:
        Delete an OAuth client approval.
        
        ### Precondition:
        Authenticated user and valid client ID
        
        ### Postcondition:
        OAuth Client approval is revoked.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/user/oauth/approvals/{client_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveOAuthApprovalResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
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

    
    def remove_o_auth_authorization(self, request: operations.RemoveOAuthAuthorizationRequest) -> operations.RemoveOAuthAuthorizationResponse:
        r"""Remove a OAuth authorization
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.12.0</h3>
        
        ### Description:
        Delete an authorization.
        
        ### Precondition:
        Authenticated user and valid client ID, authorization ID
        
        ### Postcondition:
        Authorization is revoked.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/user/oauth/authorizations/{client_id}/{authorization_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveOAuthAuthorizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
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

    
    def remove_o_auth_authorizations(self, request: operations.RemoveOAuthAuthorizationsRequest) -> operations.RemoveOAuthAuthorizationsResponse:
        r"""Remove all OAuth authorizations of a client
        ### Description:
        Delete all authorizations of a client.
        
        ### Precondition:
        Authenticated user and valid client ID
        
        ### Postcondition:
        All authorizations for the client are revoked.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/user/oauth/authorizations/{client_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveOAuthAuthorizationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
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

    
    def remove_profile_attribute(self, request: operations.RemoveProfileAttributeRequest) -> operations.RemoveProfileAttributeResponse:
        r"""Remove user profile attribute
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.7.0</h3>
        
        ### Description:  
        Delete custom user profile attribute.
        
        ### Precondition:
        None.
        
        ### Postcondition:
        Custom user profile attribute is deleted.
        
        ### Further Information:
        Allowed characters for keys are: `[a-zA-Z0-9_-]`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/user/profileAttributes/{key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveProfileAttributeResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def remove_user_key_pair(self, request: operations.RemoveUserKeyPairRequest) -> operations.RemoveUserKeyPairResponse:
        r"""Remove user's key pair
        ### Description:  
        Delete user key pair.
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        Key pair is deleted.
        
        ### Further Information:
        If parameter `version` is not set and two key versions exist, this API deletes version A.      
        If two keys with the same version are set, this API deletes the older one.
        
        This will also remove all file keys that were encrypted with the user public key.
        If the user had exclusive access to some files, those are removed as well since decrypting them became impossible.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/account/keypair"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveUserKeyPairResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def request_avatar(self, request: operations.RequestAvatarRequest) -> operations.RequestAvatarResponse:
        r"""Request avatar
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
        
        ### Description:
        Get the avatar.
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        Avatar is returned.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/account/avatar"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestAvatarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Avatar])
                res.avatar = out
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

    
    def request_customer_info(self, request: operations.RequestCustomerInfoRequest) -> operations.RequestCustomerInfoResponse:
        r"""Request customer information for user
        ### Description:  
        Use this API to get: 
        * customer name
        * used / free space
        * used / available
        * user account info
        
        of the according customer.
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        Customer information is returned.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/account/customer"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestCustomerInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerData])
                res.customer_data = out
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

    
    def request_customer_key_pair(self, request: operations.RequestCustomerKeyPairRequest) -> operations.RequestCustomerKeyPairResponseOutput:
        r"""Request customer's key pair
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.24.0</h3>
        
        ### Use `GET /settings/keypair` API
        
        ### Description:  
        Retrieve the customer rescue key pair.
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        Key pair is returned.
        
        ### Further Information:
        The private key is password-based encrypted with `AES256` / `PBKDF2`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/account/customer/keypair"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestCustomerKeyPairResponseOutput(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserKeyPairContainerOutput])
                res.user_key_pair_container = out
        elif r.status_code == 401:
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

    
    def request_list_of_notification_configs(self, request: operations.RequestListOfNotificationConfigsRequest) -> operations.RequestListOfNotificationConfigsResponse:
        r"""Request list of notification configurations
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
        
        ### Description:  
        Retrieve a list of notification configurations for current user. 
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        List of available notification configurations is returned.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/notifications/config"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestListOfNotificationConfigsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotificationConfigList])
                res.notification_config_list = out
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

    
    def request_o_auth_approvals(self, request: operations.RequestOAuthApprovalsRequest) -> operations.RequestOAuthApprovalsResponse:
        r"""Request list of OAuth client approvals
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.22.0</h3>
        
        ### Functional Description:  
        Retrieve information about all OAuth client approvals.
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        None.
        
        ### Further Information:
        None.
        
        ### Sorting:
        Sort string syntax: `FIELD_NAME:ORDER`  
        `ORDER` can be `asc` or `desc`.  
        Multiple sort criteria are possible.  
        Fields are connected via logical conjunction **AND**.
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `clientName:desc`  
        Sort by `clientName` descending.
        
        </details>
        
        ### Sorting options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Description |
        | :--- | :--- |
        | `clientName` | Client name |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/oauth/approvals"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestOAuthApprovalsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OAuthApproval]])
                res.o_auth_approvals = out
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

    
    def request_o_auth_authorizations(self, request: operations.RequestOAuthAuthorizationsRequest) -> operations.RequestOAuthAuthorizationsResponse:
        r"""Request list of OAuth client authorizations
        ### Description:  
        Retrieve information about all OAuth client authorizations.
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        List of OAuth client authorizations is returned.
        
        ### Further Information:
        
        ### Filtering:
        Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `isStandard:eq:true`  
        Get standard OAuth clients.
        
        </details>
        
        ### Filtering options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
        | :--- | :--- | :--- | :--- | :--- |
        | `isStandard` | Standard client filter | `eq` |  | `true or false` |
        
        </details>
        
        ---
        
        ### Sorting:
        Sort string syntax: `FIELD_NAME:ORDER`  
        `ORDER` can be `asc` or `desc`.  
        Multiple sort criteria are possible.  
        Fields are connected via logical conjunction **AND**.
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `clientName:desc`  
        Sort by `clientName` descending.
        
        </details>
        
        ### Sorting options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Description |
        | :--- | :--- |
        | `clientName` | Client name |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/oauth/authorizations"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestOAuthAuthorizationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OAuthAuthorization]])
                res.o_auth_authorizations = out
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

    
    def request_profile_attributes(self, request: operations.RequestProfileAttributesRequest) -> operations.RequestProfileAttributesResponse:
        r"""Request user profile attributes
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.7.0</h3>
        
        ### Description:  
        Retrieve a list of user profile attributes.
        
        ### Precondition:
        None.
        
        ### Postcondition:
        List of attributes is returned.
        
        ### Further Information:
        
        ### Filtering:
        All filter fields are connected via logical conjunction (**AND**)  
        Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `key:cn:searchString_1|value:cn:searchString_2`  
        Filter by attribute key contains `searchString_1` **AND** attribute value contains `searchString_2`.
        
        </details>
        
        ### Filtering options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
        | :--- | :--- | :--- | :--- | :--- |
        | `key` | User profile attribute key filter | `cn, eq, sw` | Attribute key contains / equals / starts with value. | `search String` |
        | `value` | User profile attribute value filter | `cn, eq, sw` | Attribute value contains / equals / starts with value. | `search String` |
        
        </details>
        
        ---
        
        ### Sorting:
        Sort string syntax: `FIELD_NAME:ORDER`  
        `ORDER` can be `asc` or `desc`.  
        Multiple sort fields are supported.  
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `key:asc|value:desc`  
        Sort by `key` ascending **AND** by `value` descending.
        
        </details>
        
        ### Sorting options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Description |
        | :--- | :--- |
        | `key` | User profile attribute key |
        | `value` | User profile attribute value |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/profileAttributes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestProfileAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AttributesResponse])
                res.attributes_response = out
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

    
    def request_user_info(self, request: operations.RequestUserInfoRequest) -> operations.RequestUserInfoResponse:
        r"""Request user account information
        ### Description:  
        Retrieves all information regarding the current user's account.
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        User information is returned.
        
        ### Further Information:
        Setting the query parameter `more_info` to `true`, causes the API to return more details e.g. the user's groups.  
        
        `customer` (`CustomerData`) attribute in `UserAccount` response model is deprecated. Please use response from `GET /user/account/customer` instead.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/account"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestUserInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserAccount])
                res.user_account = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_user_key_pair(self, request: operations.RequestUserKeyPairRequest) -> operations.RequestUserKeyPairResponseOutput:
        r"""Request user's key pair
        ### Description:  
        Retrieve the user key pair.
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        Key pair is returned. 
        
        ### Further Information:
        The private key is password-based encrypted with `AES256` / `PBKDF2`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/account/keypair"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestUserKeyPairResponseOutput(status_code=r.status_code, content_type=content_type)
        
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

    
    def request_user_key_pairs(self, request: operations.RequestUserKeyPairsRequest) -> operations.RequestUserKeyPairsResponseOutput:
        r"""Request all user key pairs
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
        
        ### Description:  
        Retrieve all user key pairs to allow re-encrypting file keys without need for a second distributor.
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        List of key pairs is returned. 
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/account/keypairs"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestUserKeyPairsResponseOutput(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserKeyPairContainerOutput]])
                res.user_key_pair_containers = out
        elif r.status_code == 401:
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

    
    def reset_avatar(self, request: operations.ResetAvatarRequest) -> operations.ResetAvatarResponse:
        r"""Reset avatar
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
        
        ### Description:  
        Reset (custom) avatar to default avatar.
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        * User's avatar gets deleted.  
        * Default avatar is set.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/account/avatar"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ResetAvatarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Avatar])
                res.avatar = out
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

    
    def set_profile_attributes(self, request: operations.SetProfileAttributesRequest) -> operations.SetProfileAttributesResponse:
        r"""Set user profile attributes
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.12.0</h3>
        
        ### Description:  
        Set custom user profile attributes.
        
        ### Precondition:
        None.
        
        ### Postcondition:
        Custom user profile attributes are set.
        
        ### Further Information:
        Batch function.  
        All existing user profile attributes will be deleted.  
        
        * Allowed characters for keys are: `[a-zA-Z0-9_-]`  
        * Characters are **case-insensitive**  
        * Maximum key length is **255**  
        * Maximum value length is **4096**
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/profileAttributes"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetProfileAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProfileAttributes])
                res.profile_attributes = out
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

    
    def set_user_key_pair(self, request: operations.SetUserKeyPairRequest) -> operations.SetUserKeyPairResponse:
        r"""Set user's key pair
        ### Description:  
        Set the user key pair.
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        Key pair is set.
        
        ### Further Information:
        Overwriting an existing key pair is **NOT** possible.  
        Please delete the existing key pair first.  
        The private key is password-based encrypted with `AES256` / `PBKDF2`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/account/keypair"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetUserKeyPairResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def subscribe_download_share(self, request: operations.SubscribeDownloadShareRequest) -> operations.SubscribeDownloadShareResponse:
        r"""Subscribe Download Share for notifications
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
        
        ### Description:  
        Subscribe Download Share for notifications.
        
        ### Precondition:
        User with _\"manage download share\"_ permissions on target node.
        
        ### Postcondition:
        Download Share is subscribed.  
        Notifications for this Download Share will be triggered in the future.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/user/subscriptions/download_shares/{share_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SubscribeDownloadShareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscribedDownloadShare])
                res.subscribed_download_share = out
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

    
    def subscribe_download_shares(self, request: operations.SubscribeDownloadSharesRequest) -> operations.SubscribeDownloadSharesResponse:
        r"""Subscribe or Unsubscribe a List of Download Shares for notifications
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
        
        ### Description:  
        Subscribe/Unsubscribe download shares for notifications.
        
        ### Precondition:
        User with _\"manage download share\"_ permissions on target node.
        
        
        
        ### Postcondition:
        Download shares are subscribed or unsubscribed.
        Notifications for these download shares will be triggered in the future.
        
        ### Further Information:
        Maximum number of subscriptions is 200.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/subscriptions/download_shares"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SubscribeDownloadSharesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def subscribe_node(self, request: operations.SubscribeNodeRequest) -> operations.SubscribeNodeResponse:
        r"""Subscribe node for notifications
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
        
        ### Description:
        Subscribe node for notifications.
        
        ### Precondition:
        User has _\"read\"_ permissions in auth parent room.
        
        ### Postcondition:
        Node is subscribed.
        Notifications for this node will be triggered in the future.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/user/subscriptions/nodes/{node_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SubscribeNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscribedNode])
                res.subscribed_node = out
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

    
    def subscribe_upload_share(self, request: operations.SubscribeUploadShareRequest) -> operations.SubscribeUploadShareResponse:
        r"""Subscribe Upload Share for notifications
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
        
        ### Description:  
        Subscribe Upload Share for notifications.
        
        ### Precondition:
        User with _\"manage upload share\"_ permissions on target node.
        
        ### Postcondition:
        Upload Share is subscribed.  
        Notifications for this Upload Share will be triggered in the future.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/user/subscriptions/upload_shares/{share_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SubscribeUploadShareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscribedUploadShare])
                res.subscribed_upload_share = out
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

    
    def subscribe_upload_shares(self, request: operations.SubscribeUploadSharesRequest) -> operations.SubscribeUploadSharesResponse:
        r"""Subscribe or Unsubscribe a List of Upload Shares for notifications
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
        
        ### Description:  
        Subscribe/Unsubscribe upload shares for notifications.
        
        ### Precondition:
        User with _\"manage upload share\"_ permissions on target node.
        
        
        
        ### Postcondition:
        Upload shares are subscribed or unsubscribed.
        Notifications for these upload shares will be triggered in the future.
        
        ### Further Information:
        Maximum number of subscriptions is 200.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/subscriptions/upload_shares"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SubscribeUploadSharesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def unsubscribe_download_share(self, request: operations.UnsubscribeDownloadShareRequest) -> operations.UnsubscribeDownloadShareResponse:
        r"""Unsubscribe Download Share from notifications
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
        
        ### Description:  
        Unsubscribe Download Share from notifications.
        
        ### Precondition:
        User with _\"manage download share\"_ permissions on target node.
        
        ### Postcondition:
        Download Share is unsubscribed.  
        Notifications for this Download Share are disabled.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/user/subscriptions/download_shares/{share_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UnsubscribeDownloadShareResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def unsubscribe_node(self, request: operations.UnsubscribeNodeRequest) -> operations.UnsubscribeNodeResponse:
        r"""Unsubscribe node from notifications
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
        
        ### Description:  
        Unsubscribe node from notifications.
        
        ### Precondition:
        User has _\"read\"_ permissions in auth parent room.
        
        ### Postcondition:
        Node is unsubscribed.  
        Notifications for this node are disabled.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/user/subscriptions/nodes/{node_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UnsubscribeNodeResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def unsubscribe_upload_share(self, request: operations.UnsubscribeUploadShareRequest) -> operations.UnsubscribeUploadShareResponse:
        r"""Unsubscribe Upload Share from notifications
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
        
        ### Description:  
        Unsubscribe Upload Share from notifications.
        
        ### Precondition:
        User with _\"manage upload share\"_ permissions on target node.
        
        ### Postcondition:
        Upload Share is unsubscribed.  
        Notifications for this Upload Share are disabled.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/user/subscriptions/upload_shares/{share_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UnsubscribeUploadShareResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def update_node_subscriptions(self, request: operations.UpdateNodeSubscriptionsRequest) -> operations.UpdateNodeSubscriptionsResponse:
        r"""Subscribe or Unsubscribe a List of nodes for notifications
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
        
        ### Description:  
        Subscribe/Unsubscribe nodes for notifications.
        
        ### Precondition:
        User has _\"read\"_ permissions in auth parent room.
        
        ### Postcondition:
        Nodes are subscribed or unsubscribed.
        Notifications for these nodes will be triggered in the future.
        
        ### Further Information:
        Maximum number of subscriptions is 200.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/subscriptions/nodes"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNodeSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def update_notification_config(self, request: operations.UpdateNotificationConfigRequest) -> operations.UpdateNotificationConfigResponse:
        r"""Update notification configuration
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
        
        ### Description:  
        Update notification configuration for current user. 
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        Notification configuration is updated.
        
        ### Further Information:
        Leave `channelIds` empty to disable notifications.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/user/notifications/config/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNotificationConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotificationConfig])
                res.notification_config = out
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

    
    def update_profile_attributes(self, request: operations.UpdateProfileAttributesRequest) -> operations.UpdateProfileAttributesResponse:
        r"""Add or edit user profile attributes
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.7.0</h3>
        
        ### Description:  
        Add or edit custom user profile attributes.
        <br/><br/><span style=\"font-weight: bold; color: red;\"> &#128679; **Warning: Please note that the response with HTTP status code 200 (OK) is deprecated and will be replaced with HTTP status code 204 (No content)!**</span><br/>
        
        ### Precondition:
        None.
        
        ### Postcondition:
        Custom user profile attributes are added or edited.
        
        ### Further Information:
        Batch function.  
        If an entry existed before, it will be overwritten.  
        Range submodel is never returned.
        
        * Allowed characters for keys are: `[a-zA-Z0-9_-]`  
        * Characters are **case-insensitive**  
        * Maximum key length is **255**  
        * Maximum value length is **4096**
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/profileAttributes"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateProfileAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProfileAttributes])
                res.profile_attributes = out
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

    
    def update_user_account(self, request: operations.UpdateUserAccountRequest) -> operations.UpdateUserAccountResponse:
        r"""Update user account
        ### Description:  
        Update current user's account.
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        User's account is updated.
        
        ### Further Information:
        * All input fields are limited to **150** characters.  
        * **All** characters are allowed.  
        
        `customer` (`CustomerData`) attribute in `UserAccount` response model is deprecated. Please use response from `GET /user/account/customer` instead.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/account"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserAccount])
                res.user_account = out
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
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def upload_avatar_as_multipart(self, request: operations.UploadAvatarAsMultipartRequest) -> operations.UploadAvatarAsMultipartResponse:
        r"""Change avatar
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
        
        ### Description:
        Change the avatar.
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        Avatar is changed.
        
        ### Further Information:
        * Media type **MUST** be `jpeg` or `png`
        * File size **MUST** bei less than `5 MB`
        * Dimensions **MUST** be `256x256 px`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/user/account/avatar"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadAvatarAsMultipartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Avatar])
                res.avatar = out
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

    