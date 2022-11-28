import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeBoulder2017ElectionContributions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchBoulder2017ElectionContributions - Search API for 'Boulder 2017 Election Contributions' entry type
     *
     * API to search for entries of type Boulder 2017 Election Contributions
    **/
    searchBoulder2017ElectionContributions(req: operations.SearchBoulder2017ElectionContributionsRequest, config?: AxiosRequestConfig): Promise<operations.SearchBoulder2017ElectionContributionsResponse>;
}
