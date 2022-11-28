import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointOceanCsvSadoTts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointOceanCsvSadoTts - Search API for 'SADO TTS Data' entry type
     *
     * API to search for entries of type SADO TTS Data
    **/
    searchTypePointOceanCsvSadoTts(req: operations.SearchTypePointOceanCsvSadoTtsRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointOceanCsvSadoTtsResponse>;
}
