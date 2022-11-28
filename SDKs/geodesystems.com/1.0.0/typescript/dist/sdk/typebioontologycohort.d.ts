import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeBioOntologyCohort {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchBioOntologyCohort - Search API for 'Cohort' entry type
     *
     * API to search for entries of type Cohort
    **/
    searchBioOntologyCohort(req: operations.SearchBioOntologyCohortRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioOntologyCohortResponse>;
}
