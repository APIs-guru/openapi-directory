import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeGeoKml {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchGeoKml - Search API for 'KML/KMZ File' entry type
     *
     * API to search for entries of type KML/KMZ File
    **/
    searchGeoKml(req: operations.SearchGeoKmlRequest, config?: AxiosRequestConfig): Promise<operations.SearchGeoKmlResponse>;
}
