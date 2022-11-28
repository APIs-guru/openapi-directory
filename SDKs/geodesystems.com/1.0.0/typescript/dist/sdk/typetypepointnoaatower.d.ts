import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointNoaaTower {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointNoaaTower - Search API for 'NOAA Tower Network' entry type
     *
     * API to search for entries of type NOAA Tower Network
    **/
    searchTypePointNoaaTower(req: operations.SearchTypePointNoaaTowerRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointNoaaTowerResponse>;
}
