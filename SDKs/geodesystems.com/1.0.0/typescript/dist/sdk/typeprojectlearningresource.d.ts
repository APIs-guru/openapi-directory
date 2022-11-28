import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeProjectLearningResource {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchProjectLearningResource - Search API for 'Teaching Resource' entry type
     *
     * API to search for entries of type Teaching Resource
    **/
    searchProjectLearningResource(req: operations.SearchProjectLearningResourceRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectLearningResourceResponse>;
}
