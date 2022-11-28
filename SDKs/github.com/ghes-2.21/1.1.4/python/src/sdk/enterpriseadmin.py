import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class EnterpriseAdmin:
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

    
    def enterprise_admin_add_authorized_ssh_key(self, request: operations.EnterpriseAdminAddAuthorizedSSHKeyRequest) -> operations.EnterpriseAdminAddAuthorizedSSHKeyResponse:
        r"""Add an authorized SSH key
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#add-an-authorized-ssh-key - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/api/settings/authorized-keys"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminAddAuthorizedSSHKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SSHKey]])
                res.ssh_keys = out

        return res

    
    def enterprise_admin_create_enterprise_server_license(self, request: operations.EnterpriseAdminCreateEnterpriseServerLicenseRequest) -> operations.EnterpriseAdminCreateEnterpriseServerLicenseResponse:
        r"""Create a GitHub license
        When you boot a GitHub instance for the first time, you can use the following endpoint to upload a license:
        
        Note that you need to POST to [`/setup/api/configure`](https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#start-a-configuration-process) to start the actual configuration process.
        
        When using this endpoint, your GitHub instance must have a password set. This can be accomplished two ways:
        
        1.  If you're working directly with the API before accessing the web interface, you must pass in the password parameter to set your password.
        2.  If you set up your instance via the web interface before accessing the API, your calls to this endpoint do not need the password parameter.
        
        For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-settings).
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#create-a-github-enterprise-server-license - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/api/start"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminCreateEnterpriseServerLicenseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass

        return res

    
    def enterprise_admin_create_global_webhook(self, request: operations.EnterpriseAdminCreateGlobalWebhookRequest) -> operations.EnterpriseAdminCreateGlobalWebhookResponse:
        r"""Create a global webhook
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#create-a-global-webhook - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/hooks"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminCreateGlobalWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalHook])
                res.global_hook = out

        return res

    
    def enterprise_admin_create_impersonation_o_auth_token(self, request: operations.EnterpriseAdminCreateImpersonationOAuthTokenRequest) -> operations.EnterpriseAdminCreateImpersonationOAuthTokenResponse:
        r"""Create an impersonation OAuth token
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#create-an-impersonation-oauth-token - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/users/{username}/authorizations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminCreateImpersonationOAuthTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Authorization])
                res.authorization = out

        return res

    
    def enterprise_admin_create_org(self, request: operations.EnterpriseAdminCreateOrgRequest) -> operations.EnterpriseAdminCreateOrgResponse:
        r"""Create an organization
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#create-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/organizations"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminCreateOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrganizationSimple])
                res.organization_simple = out

        return res

    
    def enterprise_admin_create_pre_receive_environment(self, request: operations.EnterpriseAdminCreatePreReceiveEnvironmentRequest) -> operations.EnterpriseAdminCreatePreReceiveEnvironmentResponse:
        r"""Create a pre-receive environment
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#create-a-pre-receive-environment - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/pre-receive-environments"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminCreatePreReceiveEnvironmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreReceiveEnvironment])
                res.pre_receive_environment = out

        return res

    
    def enterprise_admin_create_pre_receive_hook(self, request: operations.EnterpriseAdminCreatePreReceiveHookRequest) -> operations.EnterpriseAdminCreatePreReceiveHookResponse:
        r"""Create a pre-receive hook
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#create-a-pre-receive-hook - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/pre-receive-hooks"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminCreatePreReceiveHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreReceiveHook])
                res.pre_receive_hook = out

        return res

    
    def enterprise_admin_create_user(self, request: operations.EnterpriseAdminCreateUserRequest) -> operations.EnterpriseAdminCreateUserResponse:
        r"""Create a user
        If an external authentication mechanism is used, the login name should match the login name in the external system. If you are using LDAP authentication, you should also [update the LDAP mapping](https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user) for the user.
        
        The login name will be normalized to only contain alphanumeric characters or single hyphens. For example, if you send `\"octo_cat\"` as the login, a user named `\"octo-cat\"` will be created.
        
        If the login name or email address is already associated with an account, the server will return a `422` response.
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#create-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/users"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminCreateUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SimpleUser])
                res.simple_user = out

        return res

    
    def enterprise_admin_delete_global_webhook(self, request: operations.EnterpriseAdminDeleteGlobalWebhookRequest) -> operations.EnterpriseAdminDeleteGlobalWebhookResponse:
        r"""Delete a global webhook
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#delete-a-global-webhook - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/hooks/{hook_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminDeleteGlobalWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_delete_impersonation_o_auth_token(self, request: operations.EnterpriseAdminDeleteImpersonationOAuthTokenRequest) -> operations.EnterpriseAdminDeleteImpersonationOAuthTokenResponse:
        r"""Delete an impersonation OAuth token
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#delete-an-impersonation-oauth-token - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/users/{username}/authorizations", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminDeleteImpersonationOAuthTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_delete_personal_access_token(self, request: operations.EnterpriseAdminDeletePersonalAccessTokenRequest) -> operations.EnterpriseAdminDeletePersonalAccessTokenResponse:
        r"""Delete a personal access token
        Deletes a personal access token. Returns a `403 - Forbidden` status when a personal access token is in use. For example, if you access this endpoint with the same personal access token that you are trying to delete, you will receive this error.
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#delete-a-personal-access-token - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/tokens/{token_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminDeletePersonalAccessTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_delete_pre_receive_environment(self, request: operations.EnterpriseAdminDeletePreReceiveEnvironmentRequest) -> operations.EnterpriseAdminDeletePreReceiveEnvironmentResponse:
        r"""Delete a pre-receive environment
        If you attempt to delete an environment that cannot be deleted, you will receive a `422 Unprocessable Entity` response.
        
        The possible error messages are:
        
        *   _Cannot modify or delete the default environment_
        *   _Cannot delete environment that has hooks_
        *   _Cannot delete environment when download is in progress_
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#delete-a-pre-receive-environment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/pre-receive-environments/{pre_receive_environment_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminDeletePreReceiveEnvironmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSON])
                res.enterprise_admin_delete_pre_receive_environment_422_application_json_object = out

        return res

    
    def enterprise_admin_delete_pre_receive_hook(self, request: operations.EnterpriseAdminDeletePreReceiveHookRequest) -> operations.EnterpriseAdminDeletePreReceiveHookResponse:
        r"""Delete a pre-receive hook
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#delete-a-pre-receive-hook - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/pre-receive-hooks/{pre_receive_hook_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminDeletePreReceiveHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_delete_public_key(self, request: operations.EnterpriseAdminDeletePublicKeyRequest) -> operations.EnterpriseAdminDeletePublicKeyResponse:
        r"""Delete a public key
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#delete-a-public-key - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/keys/{key_ids}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminDeletePublicKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_delete_user(self, request: operations.EnterpriseAdminDeleteUserRequest) -> operations.EnterpriseAdminDeleteUserResponse:
        r"""Delete a user
        Deleting a user will delete all their repositories, gists, applications, and personal settings. [Suspending a user](https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#suspend-a-user) is often a better option.
        
        You can delete any user account except your own.
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#delete-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/users/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminDeleteUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_demote_site_administrator(self, request: operations.EnterpriseAdminDemoteSiteAdministratorRequest) -> operations.EnterpriseAdminDemoteSiteAdministratorResponse:
        r"""Demote a site administrator
        You can demote any user account except your own.
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#demote-a-site-administrator - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/site_admin", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminDemoteSiteAdministratorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_enable_or_disable_maintenance_mode(self, request: operations.EnterpriseAdminEnableOrDisableMaintenanceModeRequest) -> operations.EnterpriseAdminEnableOrDisableMaintenanceModeResponse:
        r"""Enable or disable maintenance mode
        The possible values for `enabled` are `true` and `false`. When it's `false`, the attribute `when` is ignored and the maintenance mode is turned off. `when` defines the time period when the maintenance was enabled.
        
        The possible values for `when` are `now` or any date parseable by [mojombo/chronic](https://github.com/mojombo/chronic).
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/api/maintenance"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminEnableOrDisableMaintenanceModeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MaintenanceStatus])
                res.maintenance_status = out

        return res

    
    def enterprise_admin_get_all_authorized_ssh_keys(self) -> operations.EnterpriseAdminGetAllAuthorizedSSHKeysResponse:
        r"""Get all authorized SSH keys
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-all-authorized-ssh-keys - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/api/settings/authorized-keys"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminGetAllAuthorizedSSHKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SSHKey]])
                res.ssh_keys = out

        return res

    
    def enterprise_admin_get_configuration_status(self) -> operations.EnterpriseAdminGetConfigurationStatusResponse:
        r"""Get the configuration status
        This endpoint allows you to check the status of the most recent configuration process:
        
        Note that you may need to wait several seconds after you start a process before you can check its status.
        
        The different statuses are:
        
        | Status        | Description                       |
        | ------------- | --------------------------------- |
        | `PENDING`     | The job has not started yet       |
        | `CONFIGURING` | The job is running                |
        | `DONE`        | The job has finished correctly    |
        | `FAILED`      | The job has finished unexpectedly |
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-the-configuration-status - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/api/configcheck"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminGetConfigurationStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigurationStatus])
                res.configuration_status = out

        return res

    
    def enterprise_admin_get_download_status_for_pre_receive_environment(self, request: operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest) -> operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse:
        r"""Get the download status for a pre-receive environment
        In addition to seeing the download status at the \"[Get a pre-receive environment](#get-a-pre-receive-environment)\" endpoint, there is also this separate endpoint for just the download status.
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-the-download-status-for-a-pre-receive-environment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/pre-receive-environments/{pre_receive_environment_id}/downloads/latest", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreReceiveEnvironmentDownloadStatus])
                res.pre_receive_environment_download_status = out

        return res

    
    def enterprise_admin_get_global_webhook(self, request: operations.EnterpriseAdminGetGlobalWebhookRequest) -> operations.EnterpriseAdminGetGlobalWebhookResponse:
        r"""Get a global webhook
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-a-global-webhook - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/hooks/{hook_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminGetGlobalWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalHook])
                res.global_hook = out

        return res

    
    def enterprise_admin_get_license_information(self) -> operations.EnterpriseAdminGetLicenseInformationResponse:
        r"""Get license information
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-license-information - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/enterprise/settings/license"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminGetLicenseInformationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LicenseInfo])
                res.license_info = out

        return res

    
    def enterprise_admin_get_maintenance_status(self) -> operations.EnterpriseAdminGetMaintenanceStatusResponse:
        r"""Get the maintenance status
        Check your installation's maintenance status:
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-the-maintenance-status - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/api/maintenance"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminGetMaintenanceStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MaintenanceStatus])
                res.maintenance_status = out

        return res

    
    def enterprise_admin_get_pre_receive_environment(self, request: operations.EnterpriseAdminGetPreReceiveEnvironmentRequest) -> operations.EnterpriseAdminGetPreReceiveEnvironmentResponse:
        r"""Get a pre-receive environment
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-a-pre-receive-environment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/pre-receive-environments/{pre_receive_environment_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminGetPreReceiveEnvironmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreReceiveEnvironment])
                res.pre_receive_environment = out

        return res

    
    def enterprise_admin_get_pre_receive_hook(self, request: operations.EnterpriseAdminGetPreReceiveHookRequest) -> operations.EnterpriseAdminGetPreReceiveHookResponse:
        r"""Get a pre-receive hook
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-a-pre-receive-hook - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/pre-receive-hooks/{pre_receive_hook_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminGetPreReceiveHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreReceiveHook])
                res.pre_receive_hook = out

        return res

    
    def enterprise_admin_get_pre_receive_hook_for_org(self, request: operations.EnterpriseAdminGetPreReceiveHookForOrgRequest) -> operations.EnterpriseAdminGetPreReceiveHookForOrgResponse:
        r"""Get a pre-receive hook for an organization
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminGetPreReceiveHookForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrgPreReceiveHook])
                res.org_pre_receive_hook = out

        return res

    
    def enterprise_admin_get_pre_receive_hook_for_repo(self, request: operations.EnterpriseAdminGetPreReceiveHookForRepoRequest) -> operations.EnterpriseAdminGetPreReceiveHookForRepoResponse:
        r"""Get a pre-receive hook for a repository
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminGetPreReceiveHookForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RepositoryPreReceiveHook])
                res.repository_pre_receive_hook = out

        return res

    
    def enterprise_admin_get_settings(self) -> operations.EnterpriseAdminGetSettingsResponse:
        r"""Get settings
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-settings - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/api/settings"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminGetSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EnterpriseSettings])
                res.enterprise_settings = out

        return res

    
    def enterprise_admin_get_type_stats(self, request: operations.EnterpriseAdminGetTypeStatsRequest) -> operations.EnterpriseAdminGetTypeStatsResponse:
        r"""Get statistics
        There are a variety of types to choose from:
        
        | Type         | Description                                                                                         |
        | ------------ | --------------------------------------------------------------------------------------------------- |
        | `issues`     | The number of open and closed issues.                                                               |
        | `hooks`      | The number of active and inactive hooks.                                                            |
        | `milestones` | The number of open and closed milestones.                                                           |
        | `orgs`       | The number of organizations, teams, team members, and disabled organizations.                       |
        | `comments`   | The number of comments on issues, pull requests, commits, and gists.                                |
        | `pages`      | The number of GitHub Pages sites.                                                                   |
        | `users`      | The number of suspended and admin users.                                                            |
        | `gists`      | The number of private and public gists.                                                             |
        | `pulls`      | The number of merged, mergeable, and unmergeable pull requests.                                     |
        | `repos`      | The number of organization-owned repositories, root repositories, forks, pushed commits, and wikis. |
        | `all`        | All of the statistics listed above.                                                                 |
        
        These statistics are cached and will be updated approximately every 10 minutes.
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-statistics - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprise/stats/{type}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminGetTypeStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.enterprise_admin_get_type_stats_200_application_json_any_of = out

        return res

    
    def enterprise_admin_list_global_webhooks(self, request: operations.EnterpriseAdminListGlobalWebhooksRequest) -> operations.EnterpriseAdminListGlobalWebhooksResponse:
        r"""List global webhooks
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#list-global-webhooks - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/hooks"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminListGlobalWebhooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GlobalHook]])
                res.global_hooks = out

        return res

    
    def enterprise_admin_list_personal_access_tokens(self, request: operations.EnterpriseAdminListPersonalAccessTokensRequest) -> operations.EnterpriseAdminListPersonalAccessTokensResponse:
        r"""List personal access tokens
        Lists personal access tokens for all users, including admin users.
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#list-personal-access-tokens - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/tokens"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminListPersonalAccessTokensResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Authorization]])
                res.authorizations = out

        return res

    
    def enterprise_admin_list_pre_receive_environments(self, request: operations.EnterpriseAdminListPreReceiveEnvironmentsRequest) -> operations.EnterpriseAdminListPreReceiveEnvironmentsResponse:
        r"""List pre-receive environments
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#list-pre-receive-environments - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/pre-receive-environments"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminListPreReceiveEnvironmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PreReceiveEnvironment]])
                res.pre_receive_environments = out

        return res

    
    def enterprise_admin_list_pre_receive_hooks(self, request: operations.EnterpriseAdminListPreReceiveHooksRequest) -> operations.EnterpriseAdminListPreReceiveHooksResponse:
        r"""List pre-receive hooks
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#list-pre-receive-hooks - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/pre-receive-hooks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminListPreReceiveHooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PreReceiveHook]])
                res.pre_receive_hooks = out

        return res

    
    def enterprise_admin_list_pre_receive_hooks_for_org(self, request: operations.EnterpriseAdminListPreReceiveHooksForOrgRequest) -> operations.EnterpriseAdminListPreReceiveHooksForOrgResponse:
        r"""List pre-receive hooks for an organization
        List all pre-receive hooks that are enabled or testing for this organization as well as any disabled hooks that can be configured at the organization level. Globally disabled pre-receive hooks that do not allow downstream configuration are not listed.
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/pre-receive-hooks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminListPreReceiveHooksForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OrgPreReceiveHook]])
                res.org_pre_receive_hooks = out

        return res

    
    def enterprise_admin_list_pre_receive_hooks_for_repo(self, request: operations.EnterpriseAdminListPreReceiveHooksForRepoRequest) -> operations.EnterpriseAdminListPreReceiveHooksForRepoResponse:
        r"""List pre-receive hooks for a repository
        List all pre-receive hooks that are enabled or testing for this repository as well as any disabled hooks that are allowed to be enabled at the repository level. Pre-receive hooks that are disabled at a higher level and are not configurable will not be listed.
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pre-receive-hooks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminListPreReceiveHooksForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RepositoryPreReceiveHook]])
                res.repository_pre_receive_hooks = out

        return res

    
    def enterprise_admin_list_public_keys(self, request: operations.EnterpriseAdminListPublicKeysRequest) -> operations.EnterpriseAdminListPublicKeysResponse:
        r"""List public keys
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#list-public-keys - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/admin/keys"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminListPublicKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.EnterprisePublicKey]])
                res.enterprise_public_keys = out

        return res

    
    def enterprise_admin_ping_global_webhook(self, request: operations.EnterpriseAdminPingGlobalWebhookRequest) -> operations.EnterpriseAdminPingGlobalWebhookResponse:
        r"""Ping a global webhook
        This will trigger a [ping event](https://docs.github.com/enterprise-server@2.21/webhooks/#ping-event) to be sent to the webhook.
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#ping-a-global-webhook - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/hooks/{hook_id}/pings", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminPingGlobalWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_promote_user_to_be_site_administrator(self, request: operations.EnterpriseAdminPromoteUserToBeSiteAdministratorRequest) -> operations.EnterpriseAdminPromoteUserToBeSiteAdministratorResponse:
        r"""Promote a user to be a site administrator
        Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs).\"
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#promote-a-user-to-be-a-site-administrator - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/site_admin", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminPromoteUserToBeSiteAdministratorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_remove_authorized_ssh_key(self, request: operations.EnterpriseAdminRemoveAuthorizedSSHKeyRequest) -> operations.EnterpriseAdminRemoveAuthorizedSSHKeyResponse:
        r"""Remove an authorized SSH key
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#remove-an-authorized-ssh-key - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/api/settings/authorized-keys"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminRemoveAuthorizedSSHKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SSHKey]])
                res.ssh_keys = out

        return res

    
    def enterprise_admin_remove_pre_receive_hook_enforcement_for_org(self, request: operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest) -> operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse:
        r"""Remove pre-receive hook enforcement for an organization
        Removes any overrides for this hook at the org level for this org.
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrgPreReceiveHook])
                res.org_pre_receive_hook = out

        return res

    
    def enterprise_admin_remove_pre_receive_hook_enforcement_for_repo(self, request: operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoRequest) -> operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoResponse:
        r"""Remove pre-receive hook enforcement for a repository
        Deletes any overridden enforcement on this repository for the specified hook.
        
        Responds with effective values inherited from owner and/or global level.
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RepositoryPreReceiveHook])
                res.repository_pre_receive_hook = out

        return res

    
    def enterprise_admin_set_settings(self, request: operations.EnterpriseAdminSetSettingsRequest) -> operations.EnterpriseAdminSetSettingsResponse:
        r"""Set settings
        For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-settings).
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#set-settings - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/api/settings"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminSetSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_start_configuration_process(self) -> operations.EnterpriseAdminStartConfigurationProcessResponse:
        r"""Start a configuration process
        This endpoint allows you to start a configuration process at any time for your updated settings to take effect:
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#start-a-configuration-process - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/api/configure"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminStartConfigurationProcessResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass

        return res

    
    def enterprise_admin_start_pre_receive_environment_download(self, request: operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest) -> operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse:
        r"""Start a pre-receive environment download
        Triggers a new download of the environment tarball from the environment's `image_url`. When the download is finished, the newly downloaded tarball will overwrite the existing environment.
        
        If a download cannot be triggered, you will receive a `422 Unprocessable Entity` response.
        
        The possible error messages are:
        
        * _Cannot modify or delete the default environment_
        * _Can not start a new download when a download is in progress_
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#start-a-pre-receive-environment-download - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/pre-receive-environments/{pre_receive_environment_id}/downloads", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreReceiveEnvironmentDownloadStatus])
                res.pre_receive_environment_download_status = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSON])
                res.enterprise_admin_start_pre_receive_environment_download_422_application_json_object = out

        return res

    
    def enterprise_admin_suspend_user(self, request: operations.EnterpriseAdminSuspendUserRequest) -> operations.EnterpriseAdminSuspendUserResponse:
        r"""Suspend a user
        If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://help.github.com/enterprise/admin/guides/user-management/using-ldap), Active Directory LDAP-authenticated users cannot be suspended through this API. If you attempt to suspend an Active Directory LDAP-authenticated user through this API, it will return a `403` response.
        
        You can suspend any user account except your own.
        
        Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs).\"
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#suspend-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/suspended", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminSuspendUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_sync_ldap_mapping_for_team(self, request: operations.EnterpriseAdminSyncLdapMappingForTeamRequest) -> operations.EnterpriseAdminSyncLdapMappingForTeamResponse:
        r"""Sync LDAP mapping for a team
        Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-team - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/ldap/teams/{team_id}/sync", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminSyncLdapMappingForTeamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EnterpriseAdminSyncLdapMappingForTeam201ApplicationJSON])
                res.enterprise_admin_sync_ldap_mapping_for_team_201_application_json_object = out

        return res

    
    def enterprise_admin_sync_ldap_mapping_for_user(self, request: operations.EnterpriseAdminSyncLdapMappingForUserRequest) -> operations.EnterpriseAdminSyncLdapMappingForUserResponse:
        r"""Sync LDAP mapping for a user
        Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/ldap/users/{username}/sync", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminSyncLdapMappingForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EnterpriseAdminSyncLdapMappingForUser201ApplicationJSON])
                res.enterprise_admin_sync_ldap_mapping_for_user_201_application_json_object = out

        return res

    
    def enterprise_admin_unsuspend_user(self, request: operations.EnterpriseAdminUnsuspendUserRequest) -> operations.EnterpriseAdminUnsuspendUserResponse:
        r"""Unsuspend a user
        If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://help.github.com/enterprise/admin/guides/user-management/using-ldap), this API is disabled and will return a `403` response. Active Directory LDAP-authenticated users cannot be unsuspended using the API.
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#unsuspend-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/suspended", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminUnsuspendUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_update_global_webhook(self, request: operations.EnterpriseAdminUpdateGlobalWebhookRequest) -> operations.EnterpriseAdminUpdateGlobalWebhookResponse:
        r"""Update a global webhook
        Parameters that are not provided will be overwritten with the default value or removed if no default exists.
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#update-a-global-webhook - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/hooks/{hook_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminUpdateGlobalWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalHook2])
                res.global_hook_2 = out

        return res

    
    def enterprise_admin_update_ldap_mapping_for_team(self, request: operations.EnterpriseAdminUpdateLdapMappingForTeamRequest) -> operations.EnterpriseAdminUpdateLdapMappingForTeamResponse:
        r"""Update LDAP mapping for a team
        Updates the [distinguished name](https://www.ldap.com/ldap-dns-and-rdns) (DN) of the LDAP entry to map to a team. [LDAP synchronization](https://help.github.com/enterprise/admin/guides/user-management/using-ldap/#enabling-ldap-sync) must be enabled to map LDAP entries to a team. Use the [Create a team](https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#create-a-team) endpoint to create a team with LDAP mapping.
        
        You can also update the LDAP mapping of a child team.
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#update-ldap-mapping-for-a-team - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/ldap/teams/{team_id}/mapping", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminUpdateLdapMappingForTeamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LdapMappingTeam])
                res.ldap_mapping_team = out

        return res

    
    def enterprise_admin_update_ldap_mapping_for_user(self, request: operations.EnterpriseAdminUpdateLdapMappingForUserRequest) -> operations.EnterpriseAdminUpdateLdapMappingForUserResponse:
        r"""Update LDAP mapping for a user
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/ldap/users/{username}/mapping", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminUpdateLdapMappingForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LdapMappingUser])
                res.ldap_mapping_user = out

        return res

    
    def enterprise_admin_update_org_name(self, request: operations.EnterpriseAdminUpdateOrgNameRequest) -> operations.EnterpriseAdminUpdateOrgNameResponse:
        r"""Update an organization name
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#update-an-organization-name - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/organizations/{org}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminUpdateOrgNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EnterpriseAdminUpdateOrgName202ApplicationJSON])
                res.enterprise_admin_update_org_name_202_application_json_object = out

        return res

    
    def enterprise_admin_update_pre_receive_environment(self, request: operations.EnterpriseAdminUpdatePreReceiveEnvironmentRequest) -> operations.EnterpriseAdminUpdatePreReceiveEnvironmentResponse:
        r"""Update a pre-receive environment
        You cannot modify the default environment. If you attempt to modify the default environment, you will receive a `422 Unprocessable Entity` response.
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#update-a-pre-receive-environment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/pre-receive-environments/{pre_receive_environment_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminUpdatePreReceiveEnvironmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreReceiveEnvironment])
                res.pre_receive_environment = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSON])
                res.enterprise_admin_update_pre_receive_environment_422_application_json_object = out

        return res

    
    def enterprise_admin_update_pre_receive_hook(self, request: operations.EnterpriseAdminUpdatePreReceiveHookRequest) -> operations.EnterpriseAdminUpdatePreReceiveHookResponse:
        r"""Update a pre-receive hook
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#update-a-pre-receive-hook - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/pre-receive-hooks/{pre_receive_hook_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminUpdatePreReceiveHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreReceiveHook])
                res.pre_receive_hook = out

        return res

    
    def enterprise_admin_update_pre_receive_hook_enforcement_for_org(self, request: operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest) -> operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse:
        r"""Update pre-receive hook enforcement for an organization
        For pre-receive hooks which are allowed to be configured at the org level, you can set `enforcement` and `allow_downstream_configuration`
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrgPreReceiveHook])
                res.org_pre_receive_hook = out

        return res

    
    def enterprise_admin_update_pre_receive_hook_enforcement_for_repo(self, request: operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest) -> operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse:
        r"""Update pre-receive hook enforcement for a repository
        For pre-receive hooks which are allowed to be configured at the repo level, you can set `enforcement`
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RepositoryPreReceiveHook])
                res.repository_pre_receive_hook = out

        return res

    
    def enterprise_admin_update_username_for_user(self, request: operations.EnterpriseAdminUpdateUsernameForUserRequest) -> operations.EnterpriseAdminUpdateUsernameForUserResponse:
        r"""Update the username for a user
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#update-the-username-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/users/{username}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminUpdateUsernameForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EnterpriseAdminUpdateUsernameForUser202ApplicationJSON])
                res.enterprise_admin_update_username_for_user_202_application_json_object = out

        return res

    
    def enterprise_admin_upgrade_license(self, request: operations.EnterpriseAdminUpgradeLicenseRequest) -> operations.EnterpriseAdminUpgradeLicenseResponse:
        r"""Upgrade a license
        This API upgrades your license and also triggers the configuration process:
        https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#upgrade-a-license - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/api/upgrade"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminUpgradeLicenseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass

        return res

    