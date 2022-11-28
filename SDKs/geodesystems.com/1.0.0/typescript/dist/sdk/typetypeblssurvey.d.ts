import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeBlsSurvey {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeBlsSurvey - Search API for 'BLS Survey' entry type
     *
     * API to search for entries of type BLS Survey
    **/
    searchTypeBlsSurvey(req: operations.SearchTypeBlsSurveyRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeBlsSurveyResponse>;
}
