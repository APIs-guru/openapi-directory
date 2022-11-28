import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Auth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postOauthAccessToken - Generate an Access Token
     *
     * By default tokens are valid for 7 days while refresh tokens are valid for 30 days. If your `grant_type` is "password" include the `username` and `password`, if however your `grant_type` is "refresh_token" the username/password are not required, instead set the `refresh_token`
     *
     * #section/Getting-Started/Perpetuating-Access - More Information on Refresh Tokens
    **/
    postOauthAccessToken(req: operations.PostOauthAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostOauthAccessTokenResponse>;
}
