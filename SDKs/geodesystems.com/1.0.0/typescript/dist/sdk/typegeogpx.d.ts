import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeGeoGpx {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchGeoGpx - Search API for 'GPX GPS File' entry type
     *
     * API to search for entries of type GPX GPS File
    **/
    searchGeoGpx(req: operations.SearchGeoGpxRequest, config?: AxiosRequestConfig): Promise<operations.SearchGeoGpxResponse>;
}
