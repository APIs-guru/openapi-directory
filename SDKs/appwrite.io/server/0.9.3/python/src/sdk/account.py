import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Account:
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

    
    def account_create_recovery(self, request: operations.AccountCreateRecoveryRequest) -> operations.AccountCreateRecoveryResponse:
        r"""Create Password Recovery
        Sends the user an email with a temporary secret key for password reset. When the user clicks the confirmation link he is redirected back to your app password reset URL with the secret key and email address values attached to the URL query string. Use the query string params to submit a request to the [PUT /account/recovery](/docs/client/account#accountUpdateRecovery) endpoint to complete the process. The verification link sent to the user's email address is valid for 1 hour.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/recovery"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountCreateRecoveryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Token])
                res.token = out

        return res

    
    def account_create_verification(self, request: operations.AccountCreateVerificationRequest) -> operations.AccountCreateVerificationResponse:
        r"""Create Email Verification
        Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the **userId** and **secret** arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the **userId** and **secret** parameters. Learn more about how to [complete the verification process](/docs/client/account#accountUpdateVerification). The verification link sent to the user's email address is valid for 7 days.
        
        Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md), the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/verification"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountCreateVerificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Token])
                res.token = out

        return res

    
    def account_delete(self, request: operations.AccountDeleteRequest) -> operations.AccountDeleteResponse:
        r"""Delete Account
        Delete a currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. This is done to avoid deleted accounts being overtaken by new users with the same email address. Any user-related resources like documents or storage files should be deleted separately.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def account_delete_session(self, request: operations.AccountDeleteSessionRequest) -> operations.AccountDeleteSessionResponse:
        r"""Delete Account Session
        Use this endpoint to log out the currently logged in user from all their account sessions across all of their different devices. When using the option id argument, only the session unique ID provider will be deleted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/sessions/{sessionId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountDeleteSessionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def account_delete_sessions(self, request: operations.AccountDeleteSessionsRequest) -> operations.AccountDeleteSessionsResponse:
        r"""Delete All Account Sessions
        Delete all sessions from the user account and remove any sessions cookies from the end client.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/sessions"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountDeleteSessionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def account_get(self, request: operations.AccountGetRequest) -> operations.AccountGetResponse:
        r"""Get Account
        Get currently logged in user data as JSON object.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out

        return res

    
    def account_get_logs(self, request: operations.AccountGetLogsRequest) -> operations.AccountGetLogsResponse:
        r"""Get Account Logs
        Get currently logged in user list of latest security activity logs. Each log returns user IP address, location and date and time of log.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/logs"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountGetLogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LogList])
                res.log_list = out

        return res

    
    def account_get_prefs(self, request: operations.AccountGetPrefsRequest) -> operations.AccountGetPrefsResponse:
        r"""Get Account Preferences
        Get currently logged in user preferences as a key-value object.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/prefs"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountGetPrefsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.preferences = out

        return res

    
    def account_get_session(self, request: operations.AccountGetSessionRequest) -> operations.AccountGetSessionResponse:
        r"""Get Session By ID
        Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/sessions/{sessionId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountGetSessionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Session])
                res.session = out

        return res

    
    def account_get_sessions(self, request: operations.AccountGetSessionsRequest) -> operations.AccountGetSessionsResponse:
        r"""Get Account Sessions
        Get currently logged in user list of active sessions across different devices.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/sessions"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountGetSessionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SessionList])
                res.session_list = out

        return res

    
    def account_update_email(self, request: operations.AccountUpdateEmailRequest) -> operations.AccountUpdateEmailResponse:
        r"""Update Account Email
        Update currently logged in user account email address. After changing user address, user confirmation status is being reset and a new confirmation mail is sent. For security measures, user password is required to complete this request.
        This endpoint can also be used to convert an anonymous account to a normal one, by passing an email address and a new password.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/email"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountUpdateEmailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out

        return res

    
    def account_update_name(self, request: operations.AccountUpdateNameRequest) -> operations.AccountUpdateNameResponse:
        r"""Update Account Name
        Update currently logged in user account name.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/name"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountUpdateNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out

        return res

    
    def account_update_password(self, request: operations.AccountUpdatePasswordRequest) -> operations.AccountUpdatePasswordResponse:
        r"""Update Account Password
        Update currently logged in user password. For validation, user is required to pass in the new password, and the old password. For users created with OAuth and Team Invites, oldPassword is optional.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/password"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountUpdatePasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out

        return res

    
    def account_update_prefs(self, request: operations.AccountUpdatePrefsRequest) -> operations.AccountUpdatePrefsResponse:
        r"""Update Account Preferences
        Update currently logged in user account preferences. You can pass only the specific settings you wish to update.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/prefs"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountUpdatePrefsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out

        return res

    
    def account_update_recovery(self, request: operations.AccountUpdateRecoveryRequest) -> operations.AccountUpdateRecoveryResponse:
        r"""Complete Password Recovery
        Use this endpoint to complete the user account password reset. Both the **userId** and **secret** arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the [POST /account/recovery](/docs/client/account#accountCreateRecovery) endpoint.
        
        Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/recovery"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountUpdateRecoveryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Token])
                res.token = out

        return res

    
    def account_update_verification(self, request: operations.AccountUpdateVerificationRequest) -> operations.AccountUpdateVerificationResponse:
        r"""Complete Email Verification
        Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/verification"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountUpdateVerificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Token])
                res.token = out

        return res

    