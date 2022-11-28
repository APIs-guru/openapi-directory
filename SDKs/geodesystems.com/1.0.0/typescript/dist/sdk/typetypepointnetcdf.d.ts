import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointNetcdf {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointNetcdf - Search API for 'NetCDF Point File' entry type
     *
     * API to search for entries of type NetCDF Point File
    **/
    searchTypePointNetcdf(req: operations.SearchTypePointNetcdfRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointNetcdfResponse>;
}
