import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeBostonCrime {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchBostonCrime - Search API for 'Boston Crime' entry type
     *
     * API to search for entries of type Boston Crime
    **/
    searchBostonCrime(req: operations.SearchBostonCrimeRequest, config?: AxiosRequestConfig): Promise<operations.SearchBostonCrimeResponse>;
}
