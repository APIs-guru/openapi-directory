import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeProjectVocabulary {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchProjectVocabulary - Search API for 'Vocabulary' entry type
     *
     * API to search for entries of type Vocabulary
    **/
    searchProjectVocabulary(req: operations.SearchProjectVocabularyRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectVocabularyResponse>;
}
