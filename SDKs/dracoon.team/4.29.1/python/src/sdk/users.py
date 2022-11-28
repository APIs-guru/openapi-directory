import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Users:
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

    
    def create_user(self, request: operations.CreateUserRequest) -> operations.CreateUserResponseOutput:
        r"""Create new user
        ### Description:
        Create a new user.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
        
        ### Postcondition:
        New user is created.
        
        ### Further Information:
        * If a user should **NOT** expire, leave `expireAt` empty.
        * All input fields are limited to **150** characters
        * Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
        
        ### Authentication Method Options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Authentication Method | Option Key | Option Value |
        | :--- | :--- | :--- |
        | `basic` / `sql` | `username` | Unique user identifier |
        | `active_directory` | `ad_config_id` (optional) | Active Directory configuration ID |
        |  | `username` | Active Directory username according to authentication setting `userFilter` |
        | `radius` | `username` | RADIUS username |
        | `openid` | `openid_config_id` (optional) | OpenID Connect configuration ID |
        |  | `username` | OpenID Connect username according to authentication setting `mappingClaim` |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/users"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateUserResponseOutput(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDataOutput])
                res.user_data = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.create_user_400_application_json_one_of = out
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
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def remove_user(self, request: operations.RemoveUserRequest) -> operations.RemoveUserResponse:
        r"""Remove user
        ### Description:
        Delete a user.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete users</span> required.
        
        ### Postcondition:
        User is deleted.
        
        ### Further Information:
        User **CANNOT** be deleted if he is a last room administrator of any room.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/users/{user_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveUserResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def remove_user_attribute(self, request: operations.RemoveUserAttributeRequest) -> operations.RemoveUserAttributeResponse:
        r"""Remove custom user attribute
        ### Description:
        Delete custom user attribute.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
        
        ### Postcondition:
        Custom user attribute is deleted.
        
        ### Further Information:
        * Allowed characters for keys are: `[a-zA-Z0-9_-]`  
        * Characters are **case-insensitive**.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/users/{user_id}/userAttributes/{key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveUserAttributeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
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

    
    def request_last_admin_rooms_users(self, request: operations.RequestLastAdminRoomsUsersRequest) -> operations.RequestLastAdminRoomsUsersResponse:
        r"""Request rooms where the user is last admin
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>
        
        ### Description:  
        Retrieve a list of all rooms where the user is last admin (except homeroom and its subordinary rooms).
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
        
        ### Postcondition:
        List of rooms is returned. 
        
        ### Further Information:
        An empty list is returned if no rooms were found where the user is last admin.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/users/{user_id}/last_admin_rooms", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestLastAdminRoomsUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LastAdminUserRoomList])
                res.last_admin_user_room_list = out
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

    
    def request_user(self, request: operations.RequestUserRequest) -> operations.RequestUserResponseOutput:
        r"""Request user
        ### Description:  
        Retrieve detailed information about a single user.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
        
        ### Postcondition:
        User information is returned.
        
        ### Further Information:
        None.
        
        ### Authentication Method Options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Authentication Method | Option Key | Option Value |
        | :--- | :--- | :--- |
        | `basic` / `sql` | `username` | Unique user identifier |
        | `active_directory` | `ad_config_id` (optional) | Active Directory configuration ID |
        |  | `username` | Active Directory username according to authentication setting `userFilter` |
        | `radius` | `username` | RADIUS username |
        | `openid` | `openid_config_id` (optional) | OpenID Connect configuration ID |
        |  | `username` | OpenID Connect username according to authentication setting `mappingClaim` |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/users/{user_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestUserResponseOutput(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDataOutput])
                res.user_data = out
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

    
    def request_user_attributes(self, request: operations.RequestUserAttributesRequest) -> operations.RequestUserAttributesResponse:
        r"""Request custom user attributes
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.12.0</h3>
        
        ### Description:  
        Retrieve a list of user attributes.
        
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
        | `key` | User attribute key filter | `cn, eq, sw` | Attribute key contains / equals / starts with value. | `search String` |
        | `value` | User attribute value filter | `cn, eq, sw` | Attribute value contains / equals / starts with value. | `search String` |
        
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
        | `key` | User attribute key |
        | `value` | User attribute value |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/users/{user_id}/userAttributes", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestUserAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AttributesResponse])
                res.attributes_response = out
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

    
    def request_user_groups(self, request: operations.RequestUserGroupsRequest) -> operations.RequestUserGroupsResponse:
        r"""Request groups that user is a member of or / and can become a member
        ### Description:  
        Retrieves a list of groups a user is member of and / or can become a member.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
        
        ### Postcondition:
        List of groups is returned.
        
        ### Further Information:
        
        ### Filtering:
        All filter fields are connected via logical conjunction (**AND**)  
        Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `isMember:eq:false|name:cn:searchString`  
        Get all groups that the user is **NOT** member of **AND** whose name is like `searchString`.
        
        </details>
        
        ### Filtering options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
        | :--- | :--- | :--- | :--- | :--- |
        | `name` | Group name filter | `cn` | Group name contains value. | `search String` |
        | `isMember` | Filter the groups which the user is (not) member of | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/users/{user_id}/groups", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestUserGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserGroupList])
                res.user_group_list = out
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

    
    def request_user_roles(self, request: operations.RequestUserRolesRequest) -> operations.RequestUserRolesResponse:
        r"""Request user's granted roles
        ### Description:  
        Retrieve a list of all roles granted to a user.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
        
        ### Postcondition:
        List of granted roles is returned.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/users/{user_id}/roles", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestUserRolesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RoleList])
                res.role_list = out
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

    
    def request_users(self, request: operations.RequestUsersRequest) -> operations.RequestUsersResponse:
        r"""Request users
        ### Description:  
        Returns a list of DRACOON users.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
        
        ### Postcondition:
        List of users is returned.
        
        ### Further Information:
        
        ### Filtering:
        All filter fields are connected via logical conjunction (**AND**)  
        Except for `login`, `firstName` and  `lastName` - these are connected via logical disjunction (**OR**)  
        Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `login:cn:searchString_1|firstName:cn:searchString_2|lockStatus:eq:2`  
        Filter users by login contains `searchString_1` **OR** firstName contains `searchString_2` **AND** those who are **NOT** locked.
        
        </details>
        
        ### Filtering options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
        | :--- | :--- | :--- | :--- | :--- |
        | `email` | Email filter | `eq`, `cn` | Email contains value. | `search String` |
        | `userName` | User name filter | `eq`, `cn` | UserName contains value. | `search String` |
        | `firstName` | User first name filter | `cn` | User first name contains value. | `search String` |
        | `lastName` | User last name filter | `cn` | User last name contains value. | `search String` |
        | `isLocked` | User lock status filter | `eq` |  | `true or false` |
        | `effectiveRoles` | Filter users with DIRECT or DIRECT **AND** EFFECTIVE roles<ul><li>`false`: DIRECT roles</li><li>`true`: DIRECT **AND** EFFECTIVE roles</li></ul>DIRECT means: e.g. user gets role **directly** granted from someone with _grant permission_ right.<br>EFFECTIVE means: e.g. user gets role through **group membership**. | `eq` |  | `true or false`<br>default: `false` |
        | `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
        | `phone` | Phone filter | `eq` | Phone equals value. | `search String` |
        | `isEncryptionEnabled` | Encryption status filter<ul><li>client-side encryption</li><li>private key possession</li></ul> | `eq` |  | `true or false` |
        | `hasRole` | User role filter<br>Depends on **effectiveRoles**.<br>For more Roles information please call `GET /roles API` | `eq` | User role  equals value. | <ul><li>`CONFIG_MANAGER` - Manage global configs</li><li>`USER_MANAGER` - Manage Users</li><li>`GROUP_MANAGER` - Manage User-Groups</li><li>`ROOM_MANAGER` - Manage top level Data Rooms</li><li>`LOG_AUDITOR` - Read logs</li><li>`NONMEMBER_VIEWER` - View users and groups when having room manage permission</li></ul> |
        
        </details>
        
        ### Deprecated filtering options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
        | :--- | :--- | :--- | :--- | :--- |
        | <del>`lockStatus`</del> | User lock status filter | `eq` | User lock status equals value. | <ul><li>`0` - Locked</li><li>`1` - Web access allowed</li><li>`2` - Web and mobile access allowed</li></ul> |
        | <del>`login`</del> | User login filter | `cn` | User login contains value. | `search String` |
        
        </details>
        
        ---
        
        ### Sorting:
        Sort string syntax: `FIELD_NAME:ORDER`  
        `ORDER` can be `asc` or `desc`.  
        Multiple sort fields are supported.  
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `firstName:asc|lastLoginSuccessAt:desc`  
        Sort by `firstName` ascending **AND** by `lastLoginSuccessAt` descending.
        
        </details>
        
        ### Sorting options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Description |
        | :--- | :--- |
        | `userName` | User name |
        | `email` | User email |
        | `firstName` | User first name |
        | `lastName` | User last name |
        | `isLocked` | User lock status |
        | `lastLoginSuccessAt` | Last successful login date |
        | `expireAt` | Expiration date |
        | `createdAt` | Creation date |
        
        </details>
        
        ### Deprecated sorting options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Description |
        | :--- | :--- |
        | <del>`gender`</del> | Gender |
        | <del>`lockStatus`</del> | User lock status |
        | <del>`login`</del> | User login |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/users"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserList])
                res.user_list = out
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

    
    def request_users_rooms(self, request: operations.RequestUsersRoomsRequest) -> operations.RequestUsersRoomsResponse:
        r"""Request rooms granted to the user or / and rooms that can be granted
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.10.0</h3>
        
        ### Description:  
        Retrieves a list of rooms granted to the user and / or that can be granted.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
        
        ### Postcondition:
        List of rooms is returned.
        
        ### Further Information:
        
        ### Filtering:
        All filter fields are connected via logical conjunction (**AND**)  
        Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `isGranted:eq:true|isLastAdmin:eq:true|name:cn:searchString`  
        Get all rooms that the user is granted **AND** is last admin **AND** whose name is like `searchString`.
        
        </details>
        
        ### Filtering options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
        | :--- | :--- | :--- | :--- | :--- |
        | `name` | Room name filter | `cn` | Room name contains value. | `search String` |
        | `isGranted` | Filter the rooms which the user is (not) granted. | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
        | `isLastAdmin` | Filter the rooms which the user is last room administrator.<br>Only in connection with `isGranted:eq:true` filter possible. | `eq` |  | `true` |
        | `effectivePerm` | Filter rooms with DIRECT or DIRECT **AND** EFFECTIVE permissions<ul><li>`false`: DIRECT permissions</li><li>`true`: DIRECT **AND** EFFECTIVE permissions</li><li>`any`: DIRECT **AND** EFFECTIVE **AND** OVER GROUP permissions</li></ul>DIRECT means: e.g. room administrator grants `read` permissions to group of users **directly** on desired room.<br>EFFECTIVE means: e.g. group of users gets `read` permissions on desired room through **inheritance**.<br>OVER GROUP means: e.g. user gets `read` permissions on desired room through **group membership**. | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `false` |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/users/{user_id}/rooms", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestUsersRoomsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RoomTreeDataList])
                res.room_tree_data_list = out
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

    
    def set_user_attributes(self, request: operations.SetUserAttributesRequest) -> operations.SetUserAttributesResponseOutput:
        r"""Set custom user attributes
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.28.0</h3>
        
        ### Description:  
        Set custom user attributes.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
        
        ### Postcondition:
        Custom user attributes are set.
        
        ### Further Information:
        Batch function.  
        All existing user attributes will be deleted.  
        
        * Allowed characters for keys are: `[a-zA-Z0-9_-]`  
        * Characters are **case-insensitive**.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/users/{user_id}/userAttributes", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetUserAttributesResponseOutput(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDataOutput])
                res.user_data = out
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

    
    def update_user(self, request: operations.UpdateUserRequest) -> operations.UpdateUserResponseOutput:
        r"""Update user's metadata
        ### Description:  
        Update user's metadata.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
        
        ### Postcondition:
        User's metadata is updated.
        
        ### Further Information:
        * If a user should **NOT** expire, leave `expireAt` empty.
        * All input fields are limited to **150** characters
        * **All** characters are allowed.
        
        ### Authentication Method Options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Authentication Method | Option Key | Option Value |
        | :--- | :--- | :--- |
        | `basic` / `sql` | `username` | Unique user identifier |
        | `active_directory` | `ad_config_id` (optional) | Active Directory configuration ID |
        |  | `username` | Active Directory username according to authentication setting `userFilter` |
        | `radius` | `username` | RADIUS username |
        | `openid` | `openid_config_id` (optional) | OpenID Connect configuration ID |
        |  | `username` | OpenID Connect username according to authentication setting `mappingClaim` |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/users/{user_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserResponseOutput(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDataOutput])
                res.user_data = out
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
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def update_user_attributes(self, request: operations.UpdateUserAttributesRequest) -> operations.UpdateUserAttributesResponseOutput:
        r"""Add or edit custom user attributes
        ### Description:  
        Add or edit custom user attributes.
        <br/><br/><span style=\"font-weight: bold; color: red;\"> &#128679; **Warning: Please note that the response with HTTP status code 200 (OK) is deprecated and will be replaced with HTTP status code 204 (No content)!**</span><br/>
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
        
        ### Postcondition:
        Custom user attributes gets added or edited.
        
        ### Further Information:
        Batch function.  
        If an entry exists before, it will be overwritten.  
        
        * Allowed characters for keys are: `[a-zA-Z0-9_-]`  
        * Characters are **case-insensitive**.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/users/{user_id}/userAttributes", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserAttributesResponseOutput(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDataOutput])
                res.user_data = out
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

    