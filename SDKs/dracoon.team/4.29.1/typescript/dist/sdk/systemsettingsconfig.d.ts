import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SystemSettingsConfig {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * requestAuthConfig - Request authentication settings
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
     *
     * ### Description:
     * DRACOON authentication configuration entry point.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * Returns a list of configurable authentication methods.
     *
     * ### Further Information:
     * Authentication methods are sorted by priority attribute.
     * Smaller values have higher priority.
     * Authentication method with highest priority is considered as default.
     * Priority **MUST** be a positive value.
     *
     * ### Configurable authentication settings:
     * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | Authentication Method | Description |
     * | :--- | :--- |
     * | `basic` | **Basic** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their credentials stored in the database.<br>Formerly known as `sql`. |
     * | `active_directory` | **Active Directory** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their Active Directory credentials. |
     * | `radius` | **RADIUS** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their RADIUS username, their PIN and a token password. |
     * | `openid` | **OpenID Connect** authentication globally allowed.This option **MUST** be activated to allow users to log in with their OpenID Connect identity. |
     *
     * </details>
    **/
    requestAuthConfig(req: operations.RequestAuthConfigRequest, config?: AxiosRequestConfig): Promise<operations.RequestAuthConfigResponse>;
    /**
     * requestEventlogConfig - Request eventlog settings
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
     *
     * ### Description:
     * DRACOON eventlog configuration entry point.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * Returns a list of configurable eventlog settings.
     *
     * ### Further Information:
     * None.
     *
     * ### Configurable eventlog settings:
     * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | Setting | Description | Value |
     * | :--- | :--- | :--- |
     * | `enabled` | Determines whether eventlog is enabled. | `true or false` |
     * | `retentionPeriod` | Retention period (in _days_) of eventlog entries.<br>After that period, all entries are deleted. | `Integer between 0 and 9999`<br>If set to `0`: no logs are deleted |
     * | `logIpEnabled` | Determines whether user’s IP address is logged. | `true or false` |
     *
     * </details>
    **/
    requestEventlogConfig(req: operations.RequestEventlogConfigRequest, config?: AxiosRequestConfig): Promise<operations.RequestEventlogConfigResponse>;
    /**
     * requestGeneralSettings - Request general settings
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
     *
     * ### Description:
     * DRACOON general settings configuration entry point.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * Returns a list of configurable general settings.
     *
     * ### Further Information:
     *
     * ### Auth token restrictions:
     *
     * A restriction is a lower bound for a token timeout and defines a duration after which a token is invalidated when it wasn't used.
     * The access/refresh token validity duration of the client is the upper bound. A token is invalidated - in any case - when it has passed.
     *
     * Auth token restrictions are enabled by default.
     *
     * * Default access token validity: **2 hours**
     * * Default refresh token validity: **30 days**
     *
     * ### Configurable general settings:
     * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | Setting | Description | Value |
     * | :--- | :--- | :--- |
     * | `sharePasswordSmsEnabled` | Determines whether sending of share passwords via SMS is allowed. | `true or false` |
     * | `cryptoEnabled` | Determines whether client-side encryption is enabled.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
     * | `emailNotificationButtonEnabled` | Determines whether email notification button is enabled. | `true or false` |
     * | `eulaEnabled` | Determines whether EULA is enabled.<br>Each user has to confirm the EULA at first login. | `true or false` |
     * | `useS3Storage` | Defines if S3 is used as storage backend.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
     * | `s3TagsEnabled` | Determines whether S3 tags are enabled | `true or false` |
     * | `hideLoginInputFields` | Determines whether input fields for login should be enabled | `true or false` |
     * | `authTokenRestrictions` | Determines auth token restrictions. (e.g. restricted access token validity) | `object` |
     *
     * </details>
     *
     * ### Deprecated configurable general settings:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | Setting | Description | Value |
     * | :--- | :--- | :--- |
     * | <del>`mediaServerEnabled`</del> | Determines whether media server is enabled.<br>Returns boolean value dependent on conjunction of `mediaServerConfigEnabled` AND `mediaServerEnabled` | `true or false` |
     * | <del>`weakPasswordEnabled`</del> | Determines whether weak password is allowed.<br>Use `GET /system/config/policies/passwords` API to get configured password policies. | `true or false` |
     *
     * </details>
    **/
    requestGeneralSettings(req: operations.RequestGeneralSettingsRequest, config?: AxiosRequestConfig): Promise<operations.RequestGeneralSettingsResponse>;
    /**
     * requestInfrastructureProperties - Request infrastructure properties
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
     *
     * ### Description:
     * DRACOON infrastructure properties entry point.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * Returns a list of read-only infrastructure properties.
     *
     * ### Further Information:
     * Source: `core-service.properties`
     *
     * ### Read-only infrastructure properties:
     * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | Setting | Description | Value |
     * | :--- | :--- | :--- |
     * | `smsConfigEnabled` | Determines whether sending of share passwords via SMS is **system-wide** enabled. | `true or false` |
     * | `mediaServerConfigEnabled` | Determines whether media server is **system-wide** enabled. | `true or false` |
     * | `s3DefaultRegion` | Suggested S3 region | `Region name` |
     * | `s3EnforceDirectUpload` | Enforce direct upload to S3 | `true or false` |
     * | `dracoonCloud` | Determines if the **DRACOON Core** is deployed in the cloud environment | `true or false` |
     * | `tenantUuid` | Current tenant UUID | `UUID` |
     *
     * </details>
    **/
    requestInfrastructureProperties(req: operations.RequestInfrastructurePropertiesRequest, config?: AxiosRequestConfig): Promise<operations.RequestInfrastructurePropertiesResponse>;
    /**
     * requestSyslogConfig - Request syslog settings
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
     *
     * ### Description:
     * DRACOON syslog configuration entry point.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * Returns a list of configurable syslog settings.
     *
     * ### Further Information:
     * None.
     *
     * ### Configurable syslog settings:
     * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | Setting | Description | Value |
     * | :--- | :--- | :--- |
     * | `enabled` | Determines whether syslog is enabled. | `true or false` |
     * | `host` | Syslog server (IP or FQDN) | `DNS name or IPv4 of a syslog server` |
     * | `port` | Syslog server port | `Valid port number` |
     * | `protocol` | Protocol to connect to syslog server | `TCP or UDP` |
     * | `logIpEnabled` | Determines whether user’s IP address is logged. | `true or false` |
     *
     * </details>
    **/
    requestSyslogConfig(req: operations.RequestSyslogConfigRequest, config?: AxiosRequestConfig): Promise<operations.RequestSyslogConfigResponse>;
    /**
     * requestSystemDefaults - Request system defaults
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
     *
     * ### Description:
     * DRACOON system defaults configuration entry point.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * Returns a list of configurable system default values.
     *
     * ### Further Information:
     * None.
     *
     * ### Configurable default values
     * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | Setting | Description | Value |
     * | :--- | :--- | :--- |
     * | `languageDefault` | Defines which language should be default. | `ISO 639-1 code` |
     * | `downloadShareDefaultExpirationPeriod` | Default expiration period for Download Shares in _days_. | `Integer between 0 and 9999` |
     * | `uploadShareDefaultExpirationPeriod` | Default expiration period for Upload Shares in _days_. | `Integer between 0 and 9999` |
     * | `fileDefaultExpirationPeriod` | Default expiration period for all uploaded files in _days_. | `Integer between 0 and 9999` |
     * | `nonmemberViewerDefault` | Defines if new users get the role _Non Member Viewer_ by default | `true or false` |
     *
     * </details>
     *
     * https://tools.ietf.org/html/rfc5646 - Tags for Identifying Languages
    **/
    requestSystemDefaults(req: operations.RequestSystemDefaultsRequest, config?: AxiosRequestConfig): Promise<operations.RequestSystemDefaultsResponse>;
    /**
     * updateAuthConfig - Update authentication settings
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
     *
     * ### Description:
     * DRACOON authentication configuration entry point.
     * Change configurable authentication settings.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * One or more authentication methods gets changed.
     *
     * ### Further Information:
     * Authentication methods are sorted by priority attribute.
     * Smaller values have higher priority.
     * Authentication method with highest priority is considered as default.
     * Priority **MUST** be a positive value.
     *
     * ### Configurable authentication settings:
     * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | Authentication Method | Description |
     * | :--- | :--- |
     * | `basic` | **Basic** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their credentials stored in the database.<br>Formerly known as `sql`. |
     * | `active_directory` | **Active Directory** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their Active Directory credentials. |
     * | `radius` | **RADIUS** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their RADIUS username, their PIN and a token password. |
     * | `openid` | **OpenID Connect** authentication globally allowed.This option **MUST** be activated to allow users to log in with their OpenID Connect identity. |
     *
     * </details>
    **/
    updateAuthConfig(req: operations.UpdateAuthConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAuthConfigResponse>;
    /**
     * updateEventlogConfig - Update eventlog settings
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
     *
     * ### Description:
     * DRACOON eventlog configuration entry point.
     * Change configurable eventlog settings.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * One or more eventlog settings gets changed.
     *
     * ### Further Information:
     * None.
     *
     * ### Configurable eventlog settings:
     * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | Setting | Description | Value |
     * | :--- | :--- | :--- |
     * | `enabled` | Determines whether eventlog is enabled. | `true or false` |
     * | `retentionPeriod` | Retention period (in _days_) of eventlog entries.<br>After that period, all entries are deleted. | `Integer between 0 and 9999`<br>If set to `0`: no logs are deleted<br>Recommended value: 7 |
     * | `logIpEnabled` | Determines whether user’s IP address is logged. | `true or false` |
     *
     * </details>
    **/
    updateEventlogConfig(req: operations.UpdateEventlogConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEventlogConfigResponse>;
    /**
     * updateGeneralSettings - Update general settings
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
     *
     * ### Description:
     * DRACOON general settings configuration entry point.
     * Change configurable general settings.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * One or more general settings gets changed.
     *
     * ### Further Information:
     * Auth token restrictions are enabled by default.
     *
     * * Default access token validity: **2 hours**
     * * Default refresh token validity: **30 days**
     *
     * ### Configurable general settings:
     * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | Setting | Description | Value |
     * | :--- | :--- | :--- |
     * | `sharePasswordSmsEnabled` | Determines whether sending of share passwords via SMS is allowed. | `true or false` |
     * | `cryptoEnabled` | Determines whether client-side encryption is enabled.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
     * | `emailNotificationButtonEnabled` | Determines whether email notification button is enabled. | `true or false` |
     * | `eulaEnabled` | Determines whether EULA is enabled.<br>Each user has to confirm the EULA at first login. | `true or false` |
     * | `s3TagsEnabled` | Determines whether S3 tags are enabled | `true or false` |
     * | `hideLoginInputFields` | Determines whether input fields for login should be enabled | `true or false` |
     * | `authTokenRestrictions` | Determines auth token restrictions. (e.g. restricted access token validity) | `object` |
     *
     * </details>
     *
     * ### Deprecated configurable general settings:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | Setting | Description | Value |
     * | :--- | :--- | :--- |
     * | <del>`mediaServerEnabled`</del> | Determines whether media server is enabled.<br>**CANNOT** be enabled if media server configuration is disabled in `core-service.properties`.<br>Check `mediaServerConfigEnabled` with `GET /system/config/settings/infrastructure`. | `true or false` |
     * | <del>`weakPasswordEnabled`</del> | Determines whether weak password is allowed.<br>Use `PUT /system/config/policies/passwords` API to change configured password policies. | `true or false` |
     *
     * </details>
    **/
    updateGeneralSettings(req: operations.UpdateGeneralSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGeneralSettingsResponse>;
    /**
     * updateSyslogConfig - Update syslog settings
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
     *
     * ### Description:
     * DRACOON syslog configuration entry point.
     * Change configurable syslog settings.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * One or more syslog settings gets changed.
     *
     * ### Further Information:
     * None.
     *
     * ### Configurable syslog settings:
     * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | Setting | Description | Value |
     * | :--- | :--- | :--- |
     * | `enabled` | Set `true` to enable syslog. | `true or false` |
     * | `host` | Syslog server (IP or FQDN) | `DNS name or IPv4 of a syslog server` |
     * | `port` | Syslog server port | `Valid port number` |
     * | `protocol` | Protocol to connect to syslog server | `TCP or UDP` |
     * | `logIpEnabled` | Determines whether user’s IP address is logged. | `true or false` |
     *
     * </details>
    **/
    updateSyslogConfig(req: operations.UpdateSyslogConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSyslogConfigResponse>;
    /**
     * updateSystemDefaults - Update system defaults
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
     *
     * ### Description:
     * DRACOON system defaults configuration entry point.
     * Change configurable system default values.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * One or more system default values gets changed.
     *
     * ### Further Information:
     * None.
     *
     * ### Configurable default values
     * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | Setting | Description | Value |
     * | :--- | :--- | :--- |
     * | `languageDefault` | Defines which language should be default. | `ISO 639-1 code` |
     * | `downloadShareDefaultExpirationPeriod` | Default expiration period for Download Shares in _days_. | `Integer between 0 and 9999`<br>Set `0` to disable. |
     * | `uploadShareDefaultExpirationPeriod` | Default expiration period for Upload Shares in _days_. | `Integer between 0 and 9999`<br>Set `0` to disable. |
     * | `fileDefaultExpirationPeriod` | Default expiration period for all uploaded files in _days_. | `Integer between 0 and 9999`<br>Set `0` to disable. |
     * | `nonmemberViewerDefault` | Defines if new users get the role _Non Member Viewer_ by default | `true or false` |
     *
     * </details>
     *
     * https://tools.ietf.org/html/rfc5646 - Tags for Identifying Languages
    **/
    updateSystemDefaults(req: operations.UpdateSystemDefaultsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSystemDefaultsResponse>;
}
