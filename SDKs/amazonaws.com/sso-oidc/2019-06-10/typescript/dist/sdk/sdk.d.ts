import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://oidc.{region}.amazonaws.com", "https://oidc.{region}.amazonaws.com", "http://oidc.{region}.amazonaws.com.cn", "https://oidc.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createToken - Creates and returns an access token for the authorized client. The access token issued will be used to fetch short-term credentials for the assigned roles in the AWS account.
    **/
    createToken(req: operations.CreateTokenRequest, config?: AxiosRequestConfig): Promise<operations.CreateTokenResponse>;
    /**
     * registerClient - Registers a client with AWS SSO. This allows clients to initiate device authorization. The output should be persisted for reuse through many authentication requests.
    **/
    registerClient(req: operations.RegisterClientRequest, config?: AxiosRequestConfig): Promise<operations.RegisterClientResponse>;
    /**
     * startDeviceAuthorization - Initiates device authorization by requesting a pair of verification codes from the authorization service.
    **/
    startDeviceAuthorization(req: operations.StartDeviceAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.StartDeviceAuthorizationResponse>;
}
export {};
