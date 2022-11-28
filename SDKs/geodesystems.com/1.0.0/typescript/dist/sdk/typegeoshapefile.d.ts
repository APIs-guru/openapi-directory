import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeGeoShapefile {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchGeoShapefile - Search API for 'Shapefile' entry type
     *
     * API to search for entries of type Shapefile
    **/
    searchGeoShapefile(req: operations.SearchGeoShapefileRequest, config?: AxiosRequestConfig): Promise<operations.SearchGeoShapefileResponse>;
}
