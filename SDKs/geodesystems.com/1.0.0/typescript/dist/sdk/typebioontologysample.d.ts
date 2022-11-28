import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeBioOntologySample {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchBioOntologySample - Search API for 'Sample' entry type
     *
     * API to search for entries of type Sample
    **/
    searchBioOntologySample(req: operations.SearchBioOntologySampleRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioOntologySampleResponse>;
}
