import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeUsPlaces {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchUsPlaces - Search API for 'US Places' entry type
     *
     * API to search for entries of type US Places
    **/
    searchUsPlaces(req: operations.SearchUsPlacesRequest, config?: AxiosRequestConfig): Promise<operations.SearchUsPlacesResponse>;
}
