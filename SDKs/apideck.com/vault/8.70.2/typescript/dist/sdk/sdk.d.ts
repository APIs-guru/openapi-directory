import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * This endpoint returns custom settings and their defaults required by connection for a given resource.
     *
    **/
    ConnectionSettingsAll(req: operations.ConnectionSettingsAllRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionSettingsAllResponse>;
    /**
     * Update default values for a connection's resource settings
    **/
    ConnectionSettingsUpdate(req: operations.ConnectionSettingsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionSettingsUpdateResponse>;
    /**
     * Create an authorized connection
     *
    **/
    ConnectionsAdd(req: operations.ConnectionsAddRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionsAddResponse>;
    /**
     * This endpoint includes all the configured integrations and contains the required assets
     * to build an integrations page where your users can install integrations.
     * OAuth2 supported integrations will contain authorize and revoke links to handle the authentication flows.
     *
    **/
    ConnectionsAll(req: operations.ConnectionsAllRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionsAllResponse>;
    /**
     * This endpoint gets called after the triggering the authorize flow.
     *
     * Callback links need a state and code parameter to verify the validity of the request.
     *
    **/
    ConnectionsCallback(req: operations.ConnectionsCallbackRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionsCallbackResponse>;
    /**
     * Deletes a connection
    **/
    ConnectionsDelete(req: operations.ConnectionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionsDeleteResponse>;
    /**
     * Import an authorized connection.
     *
    **/
    ConnectionsImport(req: operations.ConnectionsImportRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionsImportResponse>;
    /**
     * Get a connection
    **/
    ConnectionsOne(req: operations.ConnectionsOneRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionsOneResponse>;
    /**
     * __In most cases the authorize link is provided in the ``/connections`` endpoint. Normally you don't need to manually generate these links.__
     *
     * Use this endpoint to revoke an existing OAuth connector.
     *
     * Auth links will have a state parameter included to verify the validity of the request. This is the url your users will use to activate OAuth supported integration providers.
     *
     * Vault handles the complete revoke flow for you and will redirect you to the dynamic redirect uri you have appended to the url in case this is missing the default redirect uri you have configured for your Unify application.
     *
    **/
    ConnectionsRevoke(req: operations.ConnectionsRevokeRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionsRevokeResponse>;
    /**
     * Get an access token for a connection and store it in Vault. Currently only supported for connections with the client_credentials OAuth grant type.
     *
     * Note that the access token will not be returned in the response. A 200 response code indicates a valid access token was stored on the connection.
     *
    **/
    ConnectionsToken(req: operations.ConnectionsTokenRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionsTokenResponse>;
    /**
     * Update a connection
    **/
    ConnectionsUpdate(req: operations.ConnectionsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionsUpdateResponse>;
    /**
     * Get consumer request counts within a given datetime range.
     *
    **/
    ConsumerRequestCountsAll(req: operations.ConsumerRequestCountsAllRequest, config?: AxiosRequestConfig): Promise<operations.ConsumerRequestCountsAllResponse>;
    /**
     * This endpoint includes all application consumers, along with an aggregated count of requests made.
     *
    **/
    ConsumersAll(req: operations.ConsumersAllRequest, config?: AxiosRequestConfig): Promise<operations.ConsumersAllResponse>;
    /**
     * Consumer detail including their aggregated counts with the connections they have authorized.
     *
    **/
    ConsumersOne(req: operations.ConsumersOneRequest, config?: AxiosRequestConfig): Promise<operations.ConsumersOneResponse>;
    /**
     * This endpoint includes all consumer request logs.
     *
    **/
    LogsAll(req: operations.LogsAllRequest, config?: AxiosRequestConfig): Promise<operations.LogsAllResponse>;
    /**
     * Making a POST request to this endpoint will initiate a Hosted Vault session. Redirect the consumer to the returned
     * url to allow temporary access to manage their integrations and settings.
     *
     * Note: This is a short lived token that will expire after 1 hour (TTL: 3600).
     *
    **/
    SessionsCreate(req: operations.SessionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.SessionsCreateResponse>;
}
export {};
