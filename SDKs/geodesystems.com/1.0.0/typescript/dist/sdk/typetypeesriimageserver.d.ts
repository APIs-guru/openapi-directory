import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeEsriImageserver {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeEsriImageserver - Search API for 'ESRI Image Server' entry type
     *
     * API to search for entries of type ESRI Image Server
    **/
    searchTypeEsriImageserver(req: operations.SearchTypeEsriImageserverRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEsriImageserverResponse>;
}
