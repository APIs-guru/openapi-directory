import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeCensusAcs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeCensusAcs - Search API for 'US Census ACS Data' entry type
     *
     * API to search for entries of type US Census ACS Data
    **/
    searchTypeCensusAcs(req: operations.SearchTypeCensusAcsRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeCensusAcsResponse>;
}
