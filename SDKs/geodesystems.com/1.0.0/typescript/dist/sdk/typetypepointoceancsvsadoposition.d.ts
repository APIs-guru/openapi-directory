import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointOceanCsvSadoPosition {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointOceanCsvSadoPosition - Search API for 'SADO Position Data' entry type
     *
     * API to search for entries of type SADO Position Data
    **/
    searchTypePointOceanCsvSadoPosition(req: operations.SearchTypePointOceanCsvSadoPositionRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointOceanCsvSadoPositionResponse>;
}
