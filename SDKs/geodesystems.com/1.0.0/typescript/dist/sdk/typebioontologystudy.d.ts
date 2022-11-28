import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeBioOntologyStudy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchBioOntologyStudy - Search API for 'Study' entry type
     *
     * API to search for entries of type Study
    **/
    searchBioOntologyStudy(req: operations.SearchBioOntologyStudyRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioOntologyStudyResponse>;
}
