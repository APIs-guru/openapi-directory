import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeGeoGe {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchGeoGeojson - Search API for 'GeoJson File' entry type
     *
     * API to search for entries of type GeoJson File
    **/
    searchGeoGeojson(req: operations.SearchGeoGeojsonRequest, config?: AxiosRequestConfig): Promise<operations.SearchGeoGeojsonResponse>;
}
