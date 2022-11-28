import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeGeoGeotiff {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchGeoGeotiff - Search API for 'GeoTIFF' entry type
     *
     * API to search for entries of type GeoTIFF
    **/
    searchGeoGeotiff(req: operations.SearchGeoGeotiffRequest, config?: AxiosRequestConfig): Promise<operations.SearchGeoGeotiffResponse>;
}
