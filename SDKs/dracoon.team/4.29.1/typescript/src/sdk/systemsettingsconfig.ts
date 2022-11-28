import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class SystemSettingsConfig {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
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
  requestAuthConfig(
    req: operations.RequestAuthConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestAuthConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestAuthConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/system/config/settings/auth";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestAuthConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authConfig = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  requestEventlogConfig(
    req: operations.RequestEventlogConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestEventlogConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestEventlogConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/system/config/settings/eventlog";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestEventlogConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.eventlogConfig = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  requestGeneralSettings(
    req: operations.RequestGeneralSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestGeneralSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestGeneralSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/system/config/settings/general";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestGeneralSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.generalSettings = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  requestInfrastructureProperties(
    req: operations.RequestInfrastructurePropertiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestInfrastructurePropertiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestInfrastructurePropertiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/system/config/settings/infrastructure";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestInfrastructurePropertiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.infrastructureProperties = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  requestSyslogConfig(
    req: operations.RequestSyslogConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestSyslogConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestSyslogConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/system/config/settings/syslog";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestSyslogConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syslogConfig = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  requestSystemDefaults(
    req: operations.RequestSystemDefaultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestSystemDefaultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestSystemDefaultsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/system/config/settings/defaults";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestSystemDefaultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.systemDefaults = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  updateAuthConfig(
    req: operations.UpdateAuthConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateAuthConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateAuthConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/system/config/settings/auth";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateAuthConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authConfig = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  updateEventlogConfig(
    req: operations.UpdateEventlogConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateEventlogConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateEventlogConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/system/config/settings/eventlog";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateEventlogConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.eventlogConfig = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  updateGeneralSettings(
    req: operations.UpdateGeneralSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateGeneralSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateGeneralSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/system/config/settings/general";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateGeneralSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.generalSettings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  updateSyslogConfig(
    req: operations.UpdateSyslogConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSyslogConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSyslogConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/system/config/settings/syslog";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateSyslogConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syslogConfig = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  updateSystemDefaults(
    req: operations.UpdateSystemDefaultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSystemDefaultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSystemDefaultsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/system/config/settings/defaults";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateSystemDefaultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.systemDefaults = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
