import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeBioOntologyPerson {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchBioOntologyPerson - Search API for 'Person' entry type
     *
     * API to search for entries of type Person
    **/
    searchBioOntologyPerson(req: operations.SearchBioOntologyPersonRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioOntologyPersonResponse>;
}
