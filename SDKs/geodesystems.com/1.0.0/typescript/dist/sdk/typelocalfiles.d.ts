import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeLocalfiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchLocalfiles - Search API for 'Server Side Files' entry type
     *
     * API to search for entries of type Server Side Files
    **/
    searchLocalfiles(req: operations.SearchLocalfilesRequest, config?: AxiosRequestConfig): Promise<operations.SearchLocalfilesResponse>;
}
