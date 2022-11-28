import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Auth:
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

    
    def complete_open_id_login(self, request: operations.CompleteOpenIDLoginRequest) -> operations.CompleteOpenIDLoginResponse:
        r"""Complete OpenID Connect authentication
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.14.0</h3>
        
        ### Description:  
        This is the second step of the OpenID Connect authentication.  
        The user hands over the authorization code and is logged in.
        
        ### Precondition:
        Existing user with activated OpenID Connect authentication that is **NOT** locked.
        
        ### Postcondition:
        User is logged in.
        
        ### Further Information:
        None.
        http://openid.net/developers/specs - OpenID Specifications
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/auth/openid/login"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CompleteOpenIDLoginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LoginResponse])
                res.login_response = out
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
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def initiate_open_id_login(self, request: operations.InitiateOpenIDLoginRequest) -> operations.InitiateOpenIDLoginResponse:
        r"""Initiate OpenID Connect authentication
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.14.0</h3>
        
        ### Description:
        This is the first step of the OpenID Connect authentication.  
        The user is send to the OpenID Connect identity provider to authenticate himself and retrieve an authorization code.
        
        ### Precondition:
        None.
        
        ### Postcondition:
        User is redirected to OpenID Connect identity provider to authenticate himself.
        
        ### Further Information:
        None.
        http://openid.net/developers/specs - OpenID Specifications
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/auth/openid/login"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.InitiateOpenIDLoginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 302:
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
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def login(self, request: operations.LoginRequest) -> operations.LoginResponse:
        r"""Authenticate user (Login)
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.13.0</h3>
        
        ### Description:
        Authenticates user and provides an authentication token (`X-Sds-Auth-Token`) that is required for the most operations.
        
        ### Precondition:
        Existing user that is **NOT** locked.
        
        ### Postcondition:
        User is logged in.
        
        ### Further Information:
        The provided token is valid for **two hours**, every usage resets this period to two full hours again.  
        Logging off invalidates the token.  
        
        ### Available authentication methods:
        <details open style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Authentication Method (`authType`) | Description |
        | :--- | :--- |
        | `basic` | Log in with credentials stored in the database <br>Formerly known as `sql`.|
        | `active_directory` | Log in with Active Directory credentials |
        | `radius` | Log in with RADIUS username, PIN and token password.<br>Token (request parameter) may be set, otherwise this parameter is ignored. If token is set, password is optional. |
        | `openid` | Please use `POST /auth/openid/login` API to login with OpenID Connect identity |
        
        </details>
        https://tools.ietf.org/html/rfc2865 - Remote Authentication Dial In User Service (RADIUS)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/auth/login"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LoginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LoginResponse])
                res.login_response = out
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
                out = utils.unmarshal_json(r.text, Optional[shared.RadiusChallengeResponse])
                res.radius_challenge_response = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def ping(self) -> operations.PingResponse:
        r"""Ping
        ### Description:
        Test connection to DRACOON Core Service.
        
        ### Precondition:
        None.
        
        ### Postcondition:
        `200 OK` with current date string is returned if successful.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/auth/ping"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.ping_200_text_plain_string = r.content
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def recover_user_name(self, request: operations.RecoverUserNameRequest) -> operations.RecoverUserNameResponse:
        r"""Recover username
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.13.0</h3>
        
        ### Description:  
        Request an email with the user names of all accounts connected to the email.
        
        ### Precondition:
        Valid email address.
        
        ### Postcondition:
        An email is sent to the provided address, with a list of account user names connected to it.
        
        ### Further Information:
        None.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/auth/recover_username"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecoverUserNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
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

        return res

    
    def request_open_id_auth_resources(self) -> operations.RequestOpenIDAuthResourcesResponse:
        r"""Request OpenID Connect authentication resources
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.3.0</h3>
        
        ### Description:  
        Provides information about OpenID Connect authentication options.
        
        ### Precondition:
        None.
        
        ### Postcondition:
        List of available OpenID Connect Providers is returned.
        
        ### Further Information:
        Empty list is returned if OpenID Connect is **NOT** configured.
        http://openid.net/developers/specs - OpenID Specifications
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/auth/openid/resources"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestOpenIDAuthResourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenIDAuthResources])
                res.open_id_auth_resources = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_password_reset(self, request: operations.RequestPasswordResetRequest) -> operations.RequestPasswordResetResponse:
        r"""Request password reset
        ### Description:  
        Request an email with a password reset token for a certain user to reset password.
        
        ### Precondition:
        Registered user account.
        
        ### Postcondition:
        Provided user receives email with password reset token.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/auth/reset_password"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestPasswordResetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def reset_password(self, request: operations.ResetPasswordRequest) -> operations.ResetPasswordResponse:
        r"""Reset password
        ### Description:  
        Resets user's password.
        
        ### Precondition:
        User received a password reset token.
        
        ### Postcondition:
        User's password is reset to the provided password.
        
        ### Further Information:
        Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/auth/reset_password/{token}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ResetPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.reset_password_400_application_json_one_of = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def validate_reset_password_token(self, request: operations.ValidateResetPasswordTokenRequest) -> operations.ValidateResetPasswordTokenResponse:
        r"""Validate information for password reset
        ### Description:  
        Request all information for a password change dialogue e.g. real name of user.
        
        ### Precondition:
        User received a password reset token.
        
        ### Postcondition:
        Context information is returned.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/auth/reset_password/{token}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ValidateResetPasswordTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResetPasswordTokenValidateResponse])
                res.reset_password_token_validate_response = out
        elif r.status_code == 400:
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

        return res

    