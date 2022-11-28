import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeOwlClass {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchOwlClass - Search API for 'OWL Class' entry type
     *
     * API to search for entries of type OWL Class
    **/
    searchOwlClass(req: operations.SearchOwlClassRequest, config?: AxiosRequestConfig): Promise<operations.SearchOwlClassResponse>;
}
