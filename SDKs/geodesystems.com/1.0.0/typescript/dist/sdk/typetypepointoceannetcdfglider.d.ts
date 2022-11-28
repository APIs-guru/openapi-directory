import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointOceanNetcdfGlider {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointOceanNetcdfGlider - Search API for 'NetCDF Glider Data' entry type
     *
     * API to search for entries of type NetCDF Glider Data
    **/
    searchTypePointOceanNetcdfGlider(req: operations.SearchTypePointOceanNetcdfGliderRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointOceanNetcdfGliderResponse>;
}
