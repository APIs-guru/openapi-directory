import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeBoulderCrimes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchBoulderCrimes - Search API for 'Boulder Crime Reports' entry type
     *
     * API to search for entries of type Boulder Crime Reports
    **/
    searchBoulderCrimes(req: operations.SearchBoulderCrimesRequest, config?: AxiosRequestConfig): Promise<operations.SearchBoulderCrimesResponse>;
}
