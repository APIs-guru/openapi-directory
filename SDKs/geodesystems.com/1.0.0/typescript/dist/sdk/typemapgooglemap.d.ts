import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeMapGooglemap {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchMapGooglemap - Search API for 'Google Map URL' entry type
     *
     * API to search for entries of type Google Map URL
    **/
    searchMapGooglemap(req: operations.SearchMapGooglemapRequest, config?: AxiosRequestConfig): Promise<operations.SearchMapGooglemapResponse>;
}
