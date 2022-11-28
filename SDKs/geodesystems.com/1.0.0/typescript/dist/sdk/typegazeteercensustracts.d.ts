import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeGazeteerCensusTracts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchGazeteerCensusTracts - Search API for 'Census Tracts' entry type
     *
     * API to search for entries of type Census Tracts
    **/
    searchGazeteerCensusTracts(req: operations.SearchGazeteerCensusTractsRequest, config?: AxiosRequestConfig): Promise<operations.SearchGazeteerCensusTractsResponse>;
}
