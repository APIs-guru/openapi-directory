import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adsensehostAccountsAdclientsGet - Get information about one of the ad clients in the specified publisher's AdSense account.
    **/
    adsensehostAccountsAdclientsGet(req: operations.AdsensehostAccountsAdclientsGetRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsAdclientsGetResponse>;
    /**
     * adsensehostAccountsAdclientsList - List all hosted ad clients in the specified hosted account.
    **/
    adsensehostAccountsAdclientsList(req: operations.AdsensehostAccountsAdclientsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsAdclientsListResponse>;
    /**
     * adsensehostAccountsAdunitsDelete - Delete the specified ad unit from the specified publisher AdSense account.
    **/
    adsensehostAccountsAdunitsDelete(req: operations.AdsensehostAccountsAdunitsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsAdunitsDeleteResponse>;
    /**
     * adsensehostAccountsAdunitsGet - Get the specified host ad unit in this AdSense account.
    **/
    adsensehostAccountsAdunitsGet(req: operations.AdsensehostAccountsAdunitsGetRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsAdunitsGetResponse>;
    /**
     * adsensehostAccountsAdunitsGetAdCode - Get ad code for the specified ad unit, attaching the specified host custom channels.
    **/
    adsensehostAccountsAdunitsGetAdCode(req: operations.AdsensehostAccountsAdunitsGetAdCodeRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsAdunitsGetAdCodeResponse>;
    /**
     * adsensehostAccountsAdunitsInsert - Insert the supplied ad unit into the specified publisher AdSense account.
    **/
    adsensehostAccountsAdunitsInsert(req: operations.AdsensehostAccountsAdunitsInsertRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsAdunitsInsertResponse>;
    /**
     * adsensehostAccountsAdunitsList - List all ad units in the specified publisher's AdSense account.
    **/
    adsensehostAccountsAdunitsList(req: operations.AdsensehostAccountsAdunitsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsAdunitsListResponse>;
    /**
     * adsensehostAccountsAdunitsPatch - Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.
    **/
    adsensehostAccountsAdunitsPatch(req: operations.AdsensehostAccountsAdunitsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsAdunitsPatchResponse>;
    /**
     * adsensehostAccountsAdunitsUpdate - Update the supplied ad unit in the specified publisher AdSense account.
    **/
    adsensehostAccountsAdunitsUpdate(req: operations.AdsensehostAccountsAdunitsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsAdunitsUpdateResponse>;
    /**
     * adsensehostAccountsGet - Get information about the selected associated AdSense account.
    **/
    adsensehostAccountsGet(req: operations.AdsensehostAccountsGetRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsGetResponse>;
    /**
     * adsensehostAccountsList - List hosted accounts associated with this AdSense account by ad client id.
    **/
    adsensehostAccountsList(req: operations.AdsensehostAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsListResponse>;
    /**
     * adsensehostAccountsReportsGenerate - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
    **/
    adsensehostAccountsReportsGenerate(req: operations.AdsensehostAccountsReportsGenerateRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsReportsGenerateResponse>;
}
