import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tokens {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * directoryTokensDelete - Deletes all access tokens issued by a user for an application.
    **/
    directoryTokensDelete(req: operations.DirectoryTokensDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryTokensDeleteResponse>;
    /**
     * directoryTokensGet - Gets information about an access token issued by a user.
    **/
    directoryTokensGet(req: operations.DirectoryTokensGetRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryTokensGetResponse>;
    /**
     * directoryTokensList - Returns the set of tokens specified user has issued to 3rd party applications.
    **/
    directoryTokensList(req: operations.DirectoryTokensListRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryTokensListResponse>;
}
