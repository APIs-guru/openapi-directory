import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeFeccandidates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchFeccandidates - Search API for 'Candidates' entry type
     *
     * API to search for entries of type Candidates
    **/
    searchFeccandidates(req: operations.SearchFeccandidatesRequest, config?: AxiosRequestConfig): Promise<operations.SearchFeccandidatesResponse>;
}
