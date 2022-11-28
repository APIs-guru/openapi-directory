import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeDbCoIndicators {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchDbCoIndicators - Search API for 'Colorado Health Indicators' entry type
     *
     * API to search for entries of type Colorado Health Indicators
    **/
    searchDbCoIndicators(req: operations.SearchDbCoIndicatorsRequest, config?: AxiosRequestConfig): Promise<operations.SearchDbCoIndicatorsResponse>;
}
