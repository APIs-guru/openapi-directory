import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeBioOntologyAssay {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchBioOntologyAssay - Search API for 'Assay' entry type
     *
     * API to search for entries of type Assay
    **/
    searchBioOntologyAssay(req: operations.SearchBioOntologyAssayRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioOntologyAssayResponse>;
}
