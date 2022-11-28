import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeEsriGpserver {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeEsriGpserver - Search API for 'ESRI GP Server' entry type
     *
     * API to search for entries of type ESRI GP Server
    **/
    searchTypeEsriGpserver(req: operations.SearchTypeEsriGpserverRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEsriGpserverResponse>;
}
