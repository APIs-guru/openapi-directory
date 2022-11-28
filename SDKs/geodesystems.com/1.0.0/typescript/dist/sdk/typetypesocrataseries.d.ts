import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeSocrataSeries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeSocrataSeries - Search API for 'SOCRATA Series' entry type
     *
     * API to search for entries of type SOCRATA Series
    **/
    searchTypeSocrataSeries(req: operations.SearchTypeSocrataSeriesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeSocrataSeriesResponse>;
}
