import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeProjectContribution {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchProjectContribution - Search API for 'Research Contribution' entry type
     *
     * API to search for entries of type Research Contribution
    **/
    searchProjectContribution(req: operations.SearchProjectContributionRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectContributionResponse>;
}
