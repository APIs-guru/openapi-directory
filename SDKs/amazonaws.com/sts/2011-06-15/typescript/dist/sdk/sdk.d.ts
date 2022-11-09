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
    GetDecodeAuthorizationMessage(req: operations.GetDecodeAuthorizationMessageRequest, config?: AxiosRequestConfig): Promise<operations.GetDecodeAuthorizationMessageResponse>;
    GetGetAccessKeyInfo(req: operations.GetGetAccessKeyInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetGetAccessKeyInfoResponse>;
    GetGetCallerIdentity(req: operations.GetGetCallerIdentityRequest, config?: AxiosRequestConfig): Promise<operations.GetGetCallerIdentityResponse>;
    GetGetSessionToken(req: operations.GetGetSessionTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetGetSessionTokenResponse>;
    PostAssumeRole(req: operations.PostAssumeRoleRequest, config?: AxiosRequestConfig): Promise<operations.PostAssumeRoleResponse>;
    PostAssumeRoleWithSaml(req: operations.PostAssumeRoleWithSamlRequest, config?: AxiosRequestConfig): Promise<operations.PostAssumeRoleWithSamlResponse>;
    PostAssumeRoleWithWebIdentity(req: operations.PostAssumeRoleWithWebIdentityRequest, config?: AxiosRequestConfig): Promise<operations.PostAssumeRoleWithWebIdentityResponse>;
    PostDecodeAuthorizationMessage(req: operations.PostDecodeAuthorizationMessageRequest, config?: AxiosRequestConfig): Promise<operations.PostDecodeAuthorizationMessageResponse>;
    PostGetAccessKeyInfo(req: operations.PostGetAccessKeyInfoRequest, config?: AxiosRequestConfig): Promise<operations.PostGetAccessKeyInfoResponse>;
    PostGetCallerIdentity(req: operations.PostGetCallerIdentityRequest, config?: AxiosRequestConfig): Promise<operations.PostGetCallerIdentityResponse>;
    PostGetFederationToken(req: operations.PostGetFederationTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostGetFederationTokenResponse>;
    PostGetSessionToken(req: operations.PostGetSessionTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostGetSessionTokenResponse>;
}
export {};
