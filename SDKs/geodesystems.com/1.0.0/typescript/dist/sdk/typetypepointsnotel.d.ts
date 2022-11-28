import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointSnotel {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointSnotel - Search API for 'SNOTEL Snow Data' entry type
     *
     * API to search for entries of type SNOTEL Snow Data
    **/
    searchTypePointSnotel(req: operations.SearchTypePointSnotelRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointSnotelResponse>;
}
