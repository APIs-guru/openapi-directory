import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeBioOntologySeries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchBioOntologySeries - Search API for 'Series' entry type
     *
     * API to search for entries of type Series
    **/
    searchBioOntologySeries(req: operations.SearchBioOntologySeriesRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioOntologySeriesResponse>;
}
