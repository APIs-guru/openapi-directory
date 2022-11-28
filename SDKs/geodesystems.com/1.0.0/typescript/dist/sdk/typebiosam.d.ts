import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeBioSam {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchBioSam - Search API for 'SAM Data' entry type
     *
     * API to search for entries of type SAM Data
    **/
    searchBioSam(req: operations.SearchBioSamRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioSamResponse>;
}
