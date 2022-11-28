import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeFitsData {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchFitsData - Search API for 'FITS Data File' entry type
     *
     * API to search for entries of type FITS Data File
    **/
    searchFitsData(req: operations.SearchFitsDataRequest, config?: AxiosRequestConfig): Promise<operations.SearchFitsDataResponse>;
}
