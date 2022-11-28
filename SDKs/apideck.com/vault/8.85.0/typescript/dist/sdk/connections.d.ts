import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Connections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * connectionSettingsAll - Get resource settings
     *
     * This endpoint returns custom settings and their defaults required by connection for a given resource.
     *
    **/
    connectionSettingsAll(req: operations.ConnectionSettingsAllRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionSettingsAllResponse>;
    /**
     * connectionSettingsUpdate - Update settings
     *
     * Update default values for a connection's resource settings
    **/
    connectionSettingsUpdate(req: operations.ConnectionSettingsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionSettingsUpdateResponse>;
    /**
     * connectionsAdd - Create connection
     *
     * Create an authorized connection
     *
    **/
    connectionsAdd(req: operations.ConnectionsAddRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionsAddResponse>;
    /**
     * connectionsAll - Get all connections
     *
     * This endpoint includes all the configured integrations and contains the required assets
     * to build an integrations page where your users can install integrations.
     * OAuth2 supported integrations will contain authorize and revoke links to handle the authentication flows.
     *
    **/
    connectionsAll(req: operations.ConnectionsAllRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionsAllResponse>;
    /**
     * connectionsCallback - Callback
     *
     * This endpoint gets called after the triggering the authorize flow.
     *
     * Callback links need a state and code parameter to verify the validity of the request.
     *
    **/
    connectionsCallback(req: operations.ConnectionsCallbackRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionsCallbackResponse>;
    /**
     * connectionsDelete - Deletes a connection
     *
     * Deletes a connection
    **/
    connectionsDelete(req: operations.ConnectionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionsDeleteResponse>;
    /**
     * connectionsImport - Import connection
     *
     * Import an authorized connection.
     *
    **/
    connectionsImport(req: operations.ConnectionsImportRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionsImportResponse>;
    /**
     * connectionsOne - Get connection
     *
     * Get a connection
    **/
    connectionsOne(req: operations.ConnectionsOneRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionsOneResponse>;
    /**
     * connectionsRevoke - Revoke connection
     *
     * __In most cases the authorize link is provided in the ``/connections`` endpoint. Normally you don't need to manually generate these links.__
     *
     * Use this endpoint to revoke an existing OAuth connector.
     *
     * Auth links will have a state parameter included to verify the validity of the request. This is the url your users will use to activate OAuth supported integration providers.
     *
     * Vault handles the complete revoke flow for you and will redirect you to the dynamic redirect uri you have appended to the url in case this is missing the default redirect uri you have configured for your Unify application.
     *
    **/
    connectionsRevoke(req: operations.ConnectionsRevokeRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionsRevokeResponse>;
    /**
     * connectionsToken - Get Access Token
     *
     * Get an access token for a connection and store it in Vault. Currently only supported for connections with the client_credentials OAuth grant type.
     *
     * Note that the access token will not be returned in the response. A 200 response code indicates a valid access token was stored on the connection.
     *
    **/
    connectionsToken(req: operations.ConnectionsTokenRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionsTokenResponse>;
    /**
     * connectionsUpdate - Update connection
     *
     * Update a connection
    **/
    connectionsUpdate(req: operations.ConnectionsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionsUpdateResponse>;
}
