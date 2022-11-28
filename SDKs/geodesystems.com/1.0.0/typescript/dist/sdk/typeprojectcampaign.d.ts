import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeProjectCampaign {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchProjectCampaign - Search API for 'Campaign' entry type
     *
     * API to search for entries of type Campaign
    **/
    searchProjectCampaign(req: operations.SearchProjectCampaignRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectCampaignResponse>;
}
