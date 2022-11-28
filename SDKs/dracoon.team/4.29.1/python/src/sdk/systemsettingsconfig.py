import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class SystemSettingsConfig:
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

    
    def request_auth_config(self, request: operations.RequestAuthConfigRequest) -> operations.RequestAuthConfigResponse:
        r"""Request authentication settings
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
        
        ### Description:  
        DRACOON authentication configuration entry point.  
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
        role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
        
        ### Postcondition:
        Returns a list of configurable authentication methods.
        
        ### Further Information:
        Authentication methods are sorted by priority attribute.  
        Smaller values have higher priority.  
        Authentication method with highest priority is considered as default.  
        Priority **MUST** be a positive value.
        
        ### Configurable authentication settings:
        <details open style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Authentication Method | Description |
        | :--- | :--- |
        | `basic` | **Basic** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their credentials stored in the database.<br>Formerly known as `sql`. |
        | `active_directory` | **Active Directory** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their Active Directory credentials. |
        | `radius` | **RADIUS** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their RADIUS username, their PIN and a token password. |
        | `openid` | **OpenID Connect** authentication globally allowed.This option **MUST** be activated to allow users to log in with their OpenID Connect identity. |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/system/config/settings/auth"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestAuthConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthConfig])
                res.auth_config = out
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

    
    def request_eventlog_config(self, request: operations.RequestEventlogConfigRequest) -> operations.RequestEventlogConfigResponse:
        r"""Request eventlog settings
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
        
        ### Description:  
        DRACOON eventlog configuration entry point.  
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
        role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
        
        ### Postcondition:
        Returns a list of configurable eventlog settings.
        
        ### Further Information:
        None.
        
        ### Configurable eventlog settings:
        <details open style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Setting | Description | Value |
        | :--- | :--- | :--- |
        | `enabled` | Determines whether eventlog is enabled. | `true or false` |
        | `retentionPeriod` | Retention period (in _days_) of eventlog entries.<br>After that period, all entries are deleted. | `Integer between 0 and 9999`<br>If set to `0`: no logs are deleted |
        | `logIpEnabled` | Determines whether user’s IP address is logged. | `true or false` |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/system/config/settings/eventlog"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestEventlogConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventlogConfig])
                res.eventlog_config = out
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

    
    def request_general_settings(self, request: operations.RequestGeneralSettingsRequest) -> operations.RequestGeneralSettingsResponse:
        r"""Request general settings
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
        
        ### Description:  
        DRACOON general settings configuration entry point.  
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
        role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
        
        ### Postcondition:
        Returns a list of configurable general settings.
        
        ### Further Information:
        
        ### Auth token restrictions:
        
        A restriction is a lower bound for a token timeout and defines a duration after which a token is invalidated when it wasn't used.  
        The access/refresh token validity duration of the client is the upper bound. A token is invalidated - in any case - when it has passed.  
        
        Auth token restrictions are enabled by default.
        
        * Default access token validity: **2 hours**  
        * Default refresh token validity: **30 days**
        
        ### Configurable general settings:
        <details open style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Setting | Description | Value |
        | :--- | :--- | :--- |
        | `sharePasswordSmsEnabled` | Determines whether sending of share passwords via SMS is allowed. | `true or false` |
        | `cryptoEnabled` | Determines whether client-side encryption is enabled.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
        | `emailNotificationButtonEnabled` | Determines whether email notification button is enabled. | `true or false` |
        | `eulaEnabled` | Determines whether EULA is enabled.<br>Each user has to confirm the EULA at first login. | `true or false` |
        | `useS3Storage` | Defines if S3 is used as storage backend.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
        | `s3TagsEnabled` | Determines whether S3 tags are enabled | `true or false` |
        | `hideLoginInputFields` | Determines whether input fields for login should be enabled | `true or false` |
        | `authTokenRestrictions` | Determines auth token restrictions. (e.g. restricted access token validity) | `object` |
        
        </details>
        
        ### Deprecated configurable general settings:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Setting | Description | Value |
        | :--- | :--- | :--- |
        | <del>`mediaServerEnabled`</del> | Determines whether media server is enabled.<br>Returns boolean value dependent on conjunction of `mediaServerConfigEnabled` AND `mediaServerEnabled` | `true or false` |
        | <del>`weakPasswordEnabled`</del> | Determines whether weak password is allowed.<br>Use `GET /system/config/policies/passwords` API to get configured password policies. | `true or false` |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/system/config/settings/general"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestGeneralSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GeneralSettings])
                res.general_settings = out
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

    
    def request_infrastructure_properties(self, request: operations.RequestInfrastructurePropertiesRequest) -> operations.RequestInfrastructurePropertiesResponse:
        r"""Request infrastructure properties
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
        
        ### Description:  
        DRACOON infrastructure properties entry point.  
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
        role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
        
        ### Postcondition:
        Returns a list of read-only infrastructure properties.
        
        ### Further Information:
        Source: `core-service.properties`
        
        ### Read-only infrastructure properties:
        <details open style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Setting | Description | Value |
        | :--- | :--- | :--- |
        | `smsConfigEnabled` | Determines whether sending of share passwords via SMS is **system-wide** enabled. | `true or false` |
        | `mediaServerConfigEnabled` | Determines whether media server is **system-wide** enabled. | `true or false` |
        | `s3DefaultRegion` | Suggested S3 region | `Region name` |
        | `s3EnforceDirectUpload` | Enforce direct upload to S3 | `true or false` |
        | `dracoonCloud` | Determines if the **DRACOON Core** is deployed in the cloud environment | `true or false` |
        | `tenantUuid` | Current tenant UUID | `UUID` |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/system/config/settings/infrastructure"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestInfrastructurePropertiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InfrastructureProperties])
                res.infrastructure_properties = out
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

    
    def request_syslog_config(self, request: operations.RequestSyslogConfigRequest) -> operations.RequestSyslogConfigResponse:
        r"""Request syslog settings
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
        
        ### Description:  
        DRACOON syslog configuration entry point.  
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
        role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
        
        ### Postcondition:
        Returns a list of configurable syslog settings.
        
        ### Further Information:
        None.
        
        ### Configurable syslog settings:
        <details open style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Setting | Description | Value |
        | :--- | :--- | :--- |
        | `enabled` | Determines whether syslog is enabled. | `true or false` |
        | `host` | Syslog server (IP or FQDN) | `DNS name or IPv4 of a syslog server` |
        | `port` | Syslog server port | `Valid port number` |
        | `protocol` | Protocol to connect to syslog server | `TCP or UDP` |
        | `logIpEnabled` | Determines whether user’s IP address is logged. | `true or false` |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/system/config/settings/syslog"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestSyslogConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyslogConfig])
                res.syslog_config = out
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

    
    def request_system_defaults(self, request: operations.RequestSystemDefaultsRequest) -> operations.RequestSystemDefaultsResponse:
        r"""Request system defaults
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
        
        ### Description:  
        DRACOON system defaults configuration entry point.  
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
        role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
        
        ### Postcondition:
        Returns a list of configurable system default values.
        
        ### Further Information:
        None.
        
        ### Configurable default values
        <details open style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Setting | Description | Value |
        | :--- | :--- | :--- |
        | `languageDefault` | Defines which language should be default. | `ISO 639-1 code` |
        | `downloadShareDefaultExpirationPeriod` | Default expiration period for Download Shares in _days_. | `Integer between 0 and 9999` |
        | `uploadShareDefaultExpirationPeriod` | Default expiration period for Upload Shares in _days_. | `Integer between 0 and 9999` |
        | `fileDefaultExpirationPeriod` | Default expiration period for all uploaded files in _days_. | `Integer between 0 and 9999` |
        | `nonmemberViewerDefault` | Defines if new users get the role _Non Member Viewer_ by default | `true or false` |
        
        </details>
        https://tools.ietf.org/html/rfc5646 - Tags for Identifying Languages
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/system/config/settings/defaults"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestSystemDefaultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SystemDefaults])
                res.system_defaults = out
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

    
    def update_auth_config(self, request: operations.UpdateAuthConfigRequest) -> operations.UpdateAuthConfigResponse:
        r"""Update authentication settings
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
        
        ### Description:  
        DRACOON authentication configuration entry point.  
        Change configurable authentication settings.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
        role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
        
        ### Postcondition:
        One or more authentication methods gets changed.
        
        ### Further Information:
        Authentication methods are sorted by priority attribute.  
        Smaller values have higher priority.  
        Authentication method with highest priority is considered as default.  
        Priority **MUST** be a positive value.
        
        ### Configurable authentication settings:
        <details open style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Authentication Method | Description |
        | :--- | :--- |
        | `basic` | **Basic** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their credentials stored in the database.<br>Formerly known as `sql`. |
        | `active_directory` | **Active Directory** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their Active Directory credentials. |
        | `radius` | **RADIUS** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their RADIUS username, their PIN and a token password. |
        | `openid` | **OpenID Connect** authentication globally allowed.This option **MUST** be activated to allow users to log in with their OpenID Connect identity. |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/system/config/settings/auth"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAuthConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthConfig])
                res.auth_config = out
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

    
    def update_eventlog_config(self, request: operations.UpdateEventlogConfigRequest) -> operations.UpdateEventlogConfigResponse:
        r"""Update eventlog settings
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
        
        ### Description:  
        DRACOON eventlog configuration entry point.  
        Change configurable eventlog settings.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
        role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
        
        ### Postcondition:
        One or more eventlog settings gets changed.
        
        ### Further Information:
        None.
        
        ### Configurable eventlog settings:
        <details open style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Setting | Description | Value |
        | :--- | :--- | :--- |
        | `enabled` | Determines whether eventlog is enabled. | `true or false` |
        | `retentionPeriod` | Retention period (in _days_) of eventlog entries.<br>After that period, all entries are deleted. | `Integer between 0 and 9999`<br>If set to `0`: no logs are deleted<br>Recommended value: 7 |
        | `logIpEnabled` | Determines whether user’s IP address is logged. | `true or false` |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/system/config/settings/eventlog"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateEventlogConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventlogConfig])
                res.eventlog_config = out
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

    
    def update_general_settings(self, request: operations.UpdateGeneralSettingsRequest) -> operations.UpdateGeneralSettingsResponse:
        r"""Update general settings
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
        
        ### Description:  
        DRACOON general settings configuration entry point.  
        Change configurable general settings.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
        role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
        
        ### Postcondition:
        One or more general settings gets changed.
        
        ### Further Information:
        Auth token restrictions are enabled by default.
            
        * Default access token validity: **2 hours**  
        * Default refresh token validity: **30 days**
        
        ### Configurable general settings:
        <details open style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Setting | Description | Value |
        | :--- | :--- | :--- |
        | `sharePasswordSmsEnabled` | Determines whether sending of share passwords via SMS is allowed. | `true or false` |
        | `cryptoEnabled` | Determines whether client-side encryption is enabled.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
        | `emailNotificationButtonEnabled` | Determines whether email notification button is enabled. | `true or false` |
        | `eulaEnabled` | Determines whether EULA is enabled.<br>Each user has to confirm the EULA at first login. | `true or false` |
        | `s3TagsEnabled` | Determines whether S3 tags are enabled | `true or false` |
        | `hideLoginInputFields` | Determines whether input fields for login should be enabled | `true or false` |
        | `authTokenRestrictions` | Determines auth token restrictions. (e.g. restricted access token validity) | `object` |
        
        </details>
        
        ### Deprecated configurable general settings:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Setting | Description | Value |
        | :--- | :--- | :--- |
        | <del>`mediaServerEnabled`</del> | Determines whether media server is enabled.<br>**CANNOT** be enabled if media server configuration is disabled in `core-service.properties`.<br>Check `mediaServerConfigEnabled` with `GET /system/config/settings/infrastructure`. | `true or false` |
        | <del>`weakPasswordEnabled`</del> | Determines whether weak password is allowed.<br>Use `PUT /system/config/policies/passwords` API to change configured password policies. | `true or false` |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/system/config/settings/general"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGeneralSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GeneralSettings])
                res.general_settings = out
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

    
    def update_syslog_config(self, request: operations.UpdateSyslogConfigRequest) -> operations.UpdateSyslogConfigResponse:
        r"""Update syslog settings
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
        
        ### Description:  
        DRACOON syslog configuration entry point.  
        Change configurable syslog settings.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
        role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
        
        ### Postcondition:
        One or more syslog settings gets changed.
        
        ### Further Information:
        None.
        
        ### Configurable syslog settings:
        <details open style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Setting | Description | Value |
        | :--- | :--- | :--- |
        | `enabled` | Set `true` to enable syslog. | `true or false` |
        | `host` | Syslog server (IP or FQDN) | `DNS name or IPv4 of a syslog server` |
        | `port` | Syslog server port | `Valid port number` |
        | `protocol` | Protocol to connect to syslog server | `TCP or UDP` |
        | `logIpEnabled` | Determines whether user’s IP address is logged. | `true or false` |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/system/config/settings/syslog"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSyslogConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyslogConfig])
                res.syslog_config = out
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

    
    def update_system_defaults(self, request: operations.UpdateSystemDefaultsRequest) -> operations.UpdateSystemDefaultsResponse:
        r"""Update system defaults
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
        
        ### Description:  
        DRACOON system defaults configuration entry point.  
        Change configurable system default values.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
        role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
        
        ### Postcondition:
        One or more system default values gets changed.
        
        ### Further Information:
        None.
        
        ### Configurable default values
        <details open style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Setting | Description | Value |
        | :--- | :--- | :--- |
        | `languageDefault` | Defines which language should be default. | `ISO 639-1 code` |
        | `downloadShareDefaultExpirationPeriod` | Default expiration period for Download Shares in _days_. | `Integer between 0 and 9999`<br>Set `0` to disable. |
        | `uploadShareDefaultExpirationPeriod` | Default expiration period for Upload Shares in _days_. | `Integer between 0 and 9999`<br>Set `0` to disable. |
        | `fileDefaultExpirationPeriod` | Default expiration period for all uploaded files in _days_. | `Integer between 0 and 9999`<br>Set `0` to disable. |
        | `nonmemberViewerDefault` | Defines if new users get the role _Non Member Viewer_ by default | `true or false` |
        
        </details>
        https://tools.ietf.org/html/rfc5646 - Tags for Identifying Languages
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/system/config/settings/defaults"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSystemDefaultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SystemDefaults])
                res.system_defaults = out
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

    