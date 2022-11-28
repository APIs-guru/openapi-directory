import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SystemAuthConfig {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createAdConfig - Create Active Directory configuration
     *
     * ### Description:
     * Create a new Active Directory configuration.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * New Active Directory configuration created.
     *
     * ### Further Information:
     * None.
    **/
    createAdConfig(req: operations.CreateAdConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateAdConfigResponse>;
    /**
     * createOAuthClient - Create OAuth client
     *
     * ### Description:
     * Create a new OAuth client.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * New OAuth client created.
     *
     * ### Further Information:
     * Client secret **MUST** have:
     * * at least 12 characters, at most 32 characters
     * * only lower case characters, upper case characters and digits
     * * at least 1 lower case character, 1 upper case character and 1 digit
     *
     * The client secret is optional and will be generated if it is left empty.
     *
     * Valid grant types are:
     * * `authorization_code`
     * * `implicit`
     * * `password`
     * * `client_credentials`
     * * `refresh_token`
     *
     * Grant type `client_credentials` is currently **NOT** permitted!
     *
     * Allowed characters for client ID are: `[a-zA-Z0-9_-]`
     *
     * If grant types `authorization_code` or `implicit` are used, a
     * redirect URI **MUST** be provided!
     *
     * Default access token validity: **8 hours**
     * Default refresh token validity: **30 days**
     * Default approval validity: **½ year**
    **/
    createOAuthClient(req: operations.CreateOAuthClientRequest, config?: AxiosRequestConfig): Promise<operations.CreateOAuthClientResponse>;
    /**
     * createOpenIdIdpConfig - Create OpenID Connect IDP configuration
     *
     * ### Description:
     * Create new OpenID Connect IDP configuration.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * New OpenID Connect IDP configuration is created.
     *
     * ### Further Information:
     * None.
     *
     * http://openid.net/developers/specs - OpenID Specifications
    **/
    createOpenIdIdpConfig(req: operations.CreateOpenIdIdpConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateOpenIdIdpConfigResponse>;
    /**
     * createRadiusConfig - Create RADIUS configuration
     *
     * ### Description:
     * Create new RADIUS configuration.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * New RADIUS configuration is created.
     *
     * ### Further Information:
     * None.
    **/
    createRadiusConfig(req: operations.CreateRadiusConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateRadiusConfigResponse>;
    /**
     * removeAdConfig - Remove Active Directory configuration
     *
     * ### Description:
     * Delete an existing Active Directory configuration.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * Active Directory configuration is removed.
     *
     * ### Further Information:
     * None.
    **/
    removeAdConfig(req: operations.RemoveAdConfigRequest, config?: AxiosRequestConfig): Promise<operations.RemoveAdConfigResponse>;
    /**
     * removeOAuthClient - Remove OAuth client
     *
     * ### Description:
     * Delete an existing OAuth client.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * OAuth client is removed.
     *
     * ### Further Information:
     * None.
    **/
    removeOAuthClient(req: operations.RemoveOAuthClientRequest, config?: AxiosRequestConfig): Promise<operations.RemoveOAuthClientResponse>;
    /**
     * removeOpenIdIdpConfig - Remove OpenID Connect IDP configuration
     *
     * ### Description:
     * Delete an existing OpenID Connect IDP configuration.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * OpenID Connect IDP configuration is removed.
     *
     * ### Further Information:
     * None.
     *
     * http://openid.net/developers/specs - OpenID Specifications
    **/
    removeOpenIdIdpConfig(req: operations.RemoveOpenIdIdpConfigRequest, config?: AxiosRequestConfig): Promise<operations.RemoveOpenIdIdpConfigResponse>;
    /**
     * removeRadiusConfig - Remove RADIUS configuration
     *
     * ### Description:
     * Delete existing RADIUS configuration.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * RADIUS configuration is deleted.
     *
     * ### Further Information:
     * None.
    **/
    removeRadiusConfig(req: operations.RemoveRadiusConfigRequest, config?: AxiosRequestConfig): Promise<operations.RemoveRadiusConfigResponse>;
    /**
     * requestAdConfig - Request Active Directory configuration
     *
     * ### Description:
     * Retrieve the configuration of an Active Directory.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * Active Directory configuration is returned.
     *
     * ### Further Information:
     * None.
    **/
    requestAdConfig(req: operations.RequestAdConfigRequest, config?: AxiosRequestConfig): Promise<operations.RequestAdConfigResponse>;
    /**
     * requestAdConfigs - Request list of Active Directory configurations
     *
     * ### Description:
     * Retrieve a list of configured Active Directories.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * List of Active Directory configurations is returned.
     *
     * ### Further Information:
     * None.
    **/
    requestAdConfigs(req: operations.RequestAdConfigsRequest, config?: AxiosRequestConfig): Promise<operations.RequestAdConfigsResponse>;
    /**
     * requestOAuthClient - Request OAuth client
     *
     * ### Description:
     * Retrieve the configuration of an OAuth client.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * OAuth client is returned.
     *
     * ### Further Information:
     * None.
    **/
    requestOAuthClient(req: operations.RequestOAuthClientRequest, config?: AxiosRequestConfig): Promise<operations.RequestOAuthClientResponse>;
    /**
     * requestOAuthClients - Request list of OAuth clients
     *
     * ### Description:
     * Retrieve a list of configured OAuth clients.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * List of OAuth clients is returned.
     *
     * ### Further Information:
     *
     * ### Filtering:
     * All filter fields are connected via logical conjunction (**AND**)
     * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `isStandard:eq:true`
     * Get standard OAuth clients.
     *
     * </details>
     *
     * ### Filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | `isStandard` | Standard client filter | `eq` |  | `true or false` |
     * | `isExternal` | External client filter | `eq` |  | `true or false` |
     * | `isEnabled` | Enabled/disabled clients filter | `eq` |  | `true or false` |
     *
     * </details>
     *
     * ---
     *
     * ### Sorting:
     * Sort string syntax: `FIELD_NAME:ORDER`
     * `ORDER` can be `asc` or `desc`.
     * Multiple sort criteria are possible.
     * Fields are connected via logical conjunction **AND**.
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `clientName:desc|isStandard:asc`
     * Sort by `clientName` descending **AND** `isStandard` ascending.
     *
     * </details>
     *
     * ### Sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | `clientName` | Client name |
     * | `isStandard` | Is a standard client |
     * | `isExternal` | Is a external client |
     * | `isEnabled` | Is a enabled client |
     *
     * </details>
    **/
    requestOAuthClients(req: operations.RequestOAuthClientsRequest, config?: AxiosRequestConfig): Promise<operations.RequestOAuthClientsResponse>;
    /**
     * requestOpenIdIdpConfig - Request OpenID Connect IDP configuration
     *
     * ### Description:
     * Retrieve an OpenID Connect IDP configuration.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * OpenID Connect IDP configuration is returned.
     *
     * ### Further Information:
     * None.
     *
     * http://openid.net/developers/specs - OpenID Specifications
    **/
    requestOpenIdIdpConfig(req: operations.RequestOpenIdIdpConfigRequest, config?: AxiosRequestConfig): Promise<operations.RequestOpenIdIdpConfigResponse>;
    /**
     * requestOpenIdIdpConfigs - Request list of OpenID Connect IDP configurations
     *
     * ### Description:
     * Retrieve a list of configured OpenID Connect IDPs.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * List of OpenID Connect IDP configurations is returned.
     *
     * ### Further Information:
     * None.
     *
     * http://openid.net/developers/specs - OpenID Specifications
    **/
    requestOpenIdIdpConfigs(req: operations.RequestOpenIdIdpConfigsRequest, config?: AxiosRequestConfig): Promise<operations.RequestOpenIdIdpConfigsResponse>;
    /**
     * requestRadiusConfig - Request RADIUS configuration
     *
     * ### Description:
     * Retrieve a RADIUS configuration.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * RADIUS configuration is returned.
     *
     * ### Further Information:
     * None.
    **/
    requestRadiusConfig(req: operations.RequestRadiusConfigRequest, config?: AxiosRequestConfig): Promise<operations.RequestRadiusConfigResponse>;
    /**
     * testAdConfig - Test Active Directory configuration
     *
     * ### Description:
     * Test Active Directory configuration.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * Active Directory configuration is returned if successful.
     *
     * ### Further Information:
     * DRACOON tries to establish a connection with the provided information.
    **/
    testAdConfig(req: operations.TestAdConfigRequest, config?: AxiosRequestConfig): Promise<operations.TestAdConfigResponse>;
    /**
     * testRadiusConfig - Test RADIUS server availability
     *
     * ### Description:
     * Test RADIUS configuration.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * RADIUS configuration is returned if successful.
     *
     * ### Further Information:
     * DRACOON tries to establish a connection with the provided information.
    **/
    testRadiusConfig(req: operations.TestRadiusConfigRequest, config?: AxiosRequestConfig): Promise<operations.TestRadiusConfigResponse>;
    /**
     * updateAdConfig - Update Active Directory configuration
     *
     * ### Description:
     * Update an existing Active Directory configuration.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * Active Directory configuration updated.
     *
     * ### Further Information:
     * None.
    **/
    updateAdConfig(req: operations.UpdateAdConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAdConfigResponse>;
    /**
     * updateOAuthClient - Update OAuth client
     *
     * ### Description:
     * Update an existing OAuth client.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * OAuth client updated.
     *
     * ### Further Information:
     * Client secret **MUST** have:
     * * at least 12 characters, at most 32 characters
     * * only lower case characters, upper case characters and digits
     * * at least 1 lower case character, 1 upper case character and 1 digit
     *
     * The client secret is optional and will be generated if it is left empty.
     *
     * Valid grant types are:
     * * `authorization_code`
     * * `implicit`
     * * `password`
     * * `client_credentials`
     * * `refresh_token`
     *
     * Grant type `client_credentials` is currently **NOT** permitted!
     *
     * If grant types `authorization_code` or `implicit` are used, a
     * redirect URI **MUST** be provided!
     *
    **/
    updateOAuthClient(req: operations.UpdateOAuthClientRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOAuthClientResponse>;
    /**
     * updateOpenIdIdpConfig - Update OpenID Connect IDP configuration
     *
     * ### Description:
     * Update an existing OpenID Connect IDP configuration.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * OpenID Connect IDP configuration is updated.
     *
     * ### Further Information:
     * None.
     *
     * http://openid.net/developers/specs - OpenID Specifications
    **/
    updateOpenIdIdpConfig(req: operations.UpdateOpenIdIdpConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOpenIdIdpConfigResponse>;
    /**
     * updateRadiusConfig - Update RADIUS configuration
     *
     * ### Description:
     * Update existing RADIUS configuration.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * RADIUS configuration is updated.
     *
     * ### Further Information:
     * None.
    **/
    updateRadiusConfig(req: operations.UpdateRadiusConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRadiusConfigResponse>;
}
