import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeWeblog {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchWeblog - Search API for 'Weblog' entry type
     *
     * API to search for entries of type Weblog
    **/
    searchWeblog(req: operations.SearchWeblogRequest, config?: AxiosRequestConfig): Promise<operations.SearchWeblogResponse>;
}
