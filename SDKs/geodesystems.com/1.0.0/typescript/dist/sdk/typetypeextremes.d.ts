import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeExtremes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeExtremes - Search API for 'NOAA Extremes Data' entry type
     *
     * API to search for entries of type NOAA Extremes Data
    **/
    searchTypeExtremes(req: operations.SearchTypeExtremesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeExtremesResponse>;
}
