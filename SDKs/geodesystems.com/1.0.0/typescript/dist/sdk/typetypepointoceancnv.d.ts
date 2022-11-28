import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointOceanCnv {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointOceanCnv - Search API for 'SeaBird CNV Data' entry type
     *
     * API to search for entries of type SeaBird CNV Data
    **/
    searchTypePointOceanCnv(req: operations.SearchTypePointOceanCnvRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointOceanCnvResponse>;
}
