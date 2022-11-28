import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Authorization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAuthorizationCodeId - Get Authorization Code
     *
     * Call to this API starts authorization flow using OAuth 2.0 protocol. This isn't an API call—it's a DigiLocker web page that lets the user sign in to DigiLocker and authorize your application to access user’s data. After the user decides whether or not to authorize your app, they will be redirected to the redirect link provided by your application.
    **/
    getAuthorizationCodeId(req: operations.GetAuthorizationCodeIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthorizationCodeIdResponse>;
    /**
     * getaccesstokenId - Get Access Token
     *
     * This endpoint only applies to apps using the authorization code flow. An app calls this endpoint to acquire a bearer token once the user has authorized the app. Calls to /oauth2/1/token need to be authenticated using the app's key and secret. These can either be passed as application/x-www-form-urlencoded POST parameters (see parameters below) or via HTTP basic authentication. If basic authentication is used, the app key should be provided as the username, and the app secret should be provided as the password.
    **/
    getaccesstokenId(req: operations.GetaccesstokenIdRequest, config?: AxiosRequestConfig): Promise<operations.GetaccesstokenIdResponse>;
}
