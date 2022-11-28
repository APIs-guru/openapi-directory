import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeCommitteeDonations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchCommitteeDonations - Search API for 'Committee Donations' entry type
     *
     * API to search for entries of type Committee Donations
    **/
    searchCommitteeDonations(req: operations.SearchCommitteeDonationsRequest, config?: AxiosRequestConfig): Promise<operations.SearchCommitteeDonationsResponse>;
}
