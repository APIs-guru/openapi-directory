import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointOceanCsvSadoMeteo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointOceanCsvSadoMeteo - Search API for 'SADO Meteo Data' entry type
     *
     * API to search for entries of type SADO Meteo Data
    **/
    searchTypePointOceanCsvSadoMeteo(req: operations.SearchTypePointOceanCsvSadoMeteoRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointOceanCsvSadoMeteoResponse>;
}
