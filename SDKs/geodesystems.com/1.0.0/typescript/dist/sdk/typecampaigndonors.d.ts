import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeCampaignDonors {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchCampaignDonors - Search API for 'Campaign Donors' entry type
     *
     * API to search for entries of type Campaign Donors
    **/
    searchCampaignDonors(req: operations.SearchCampaignDonorsRequest, config?: AxiosRequestConfig): Promise<operations.SearchCampaignDonorsResponse>;
}
