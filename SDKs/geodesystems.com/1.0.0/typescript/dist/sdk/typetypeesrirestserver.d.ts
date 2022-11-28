import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeEsriRestserver {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeEsriRestserver - Search API for 'ESRI Web Server' entry type
     *
     * API to search for entries of type ESRI Web Server
    **/
    searchTypeEsriRestserver(req: operations.SearchTypeEsriRestserverRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEsriRestserverResponse>;
}
