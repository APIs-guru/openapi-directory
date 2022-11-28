import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Asps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * directoryAspsDelete - Deletes an ASP issued by a user.
    **/
    directoryAspsDelete(req: operations.DirectoryAspsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryAspsDeleteResponse>;
    /**
     * directoryAspsGet - Gets information about an ASP issued by a user.
    **/
    directoryAspsGet(req: operations.DirectoryAspsGetRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryAspsGetResponse>;
    /**
     * directoryAspsList - Lists the ASPs issued by a user.
    **/
    directoryAspsList(req: operations.DirectoryAspsListRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryAspsListResponse>;
}
