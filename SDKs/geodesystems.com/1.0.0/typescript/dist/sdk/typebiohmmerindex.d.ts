import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeBioHmmerIndex {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchBioHmmerIndex - Search API for 'HMMER Index File' entry type
     *
     * API to search for entries of type HMMER Index File
    **/
    searchBioHmmerIndex(req: operations.SearchBioHmmerIndexRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioHmmerIndexResponse>;
}
