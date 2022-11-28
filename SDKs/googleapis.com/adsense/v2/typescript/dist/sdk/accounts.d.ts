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
     * adsenseAccountsAdclientsAdunitsCreate - Creates an ad unit. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product. Note that ad units can only be created for ad clients with an "AFC" product code. For more info see the [AdClient resource](/adsense/management/reference/rest/v2/accounts.adclients). For now, this method can only be used to create `DISPLAY` ad units. See: https://support.google.com/adsense/answer/9183566
    **/
    adsenseAccountsAdclientsAdunitsCreate(req: operations.AdsenseAccountsAdclientsAdunitsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsAdunitsCreateResponse>;
    /**
     * adsenseAccountsAdclientsAdunitsGetAdcode - Gets the ad unit code for a given ad unit. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634) and [Where to place the ad code in your HTML](https://support.google.com/adsense/answer/9190028).
    **/
    adsenseAccountsAdclientsAdunitsGetAdcode(req: operations.AdsenseAccountsAdclientsAdunitsGetAdcodeRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsAdunitsGetAdcodeResponse>;
    /**
     * adsenseAccountsAdclientsAdunitsList - Lists all ad units under a specified account and ad client.
    **/
    adsenseAccountsAdclientsAdunitsList(req: operations.AdsenseAccountsAdclientsAdunitsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsAdunitsListResponse>;
    /**
     * adsenseAccountsAdclientsAdunitsListLinkedCustomChannels - Lists all the custom channels available for an ad unit.
    **/
    adsenseAccountsAdclientsAdunitsListLinkedCustomChannels(req: operations.AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsResponse>;
    /**
     * adsenseAccountsAdclientsCustomchannelsCreate - Creates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
    **/
    adsenseAccountsAdclientsCustomchannelsCreate(req: operations.AdsenseAccountsAdclientsCustomchannelsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsCustomchannelsCreateResponse>;
    /**
     * adsenseAccountsAdclientsCustomchannelsDelete - Deletes a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
    **/
    adsenseAccountsAdclientsCustomchannelsDelete(req: operations.AdsenseAccountsAdclientsCustomchannelsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsCustomchannelsDeleteResponse>;
    /**
     * adsenseAccountsAdclientsCustomchannelsList - Lists all the custom channels available in an ad client.
    **/
    adsenseAccountsAdclientsCustomchannelsList(req: operations.AdsenseAccountsAdclientsCustomchannelsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsCustomchannelsListResponse>;
    /**
     * adsenseAccountsAdclientsCustomchannelsListLinkedAdUnits - Lists all the ad units available for a custom channel.
    **/
    adsenseAccountsAdclientsCustomchannelsListLinkedAdUnits(req: operations.AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsResponse>;
    /**
     * adsenseAccountsAdclientsCustomchannelsPatch - Updates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
    **/
    adsenseAccountsAdclientsCustomchannelsPatch(req: operations.AdsenseAccountsAdclientsCustomchannelsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsCustomchannelsPatchResponse>;
    /**
     * adsenseAccountsAdclientsList - Lists all the ad clients available in an account.
    **/
    adsenseAccountsAdclientsList(req: operations.AdsenseAccountsAdclientsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsListResponse>;
    /**
     * adsenseAccountsAdclientsUrlchannelsList - Lists active url channels.
    **/
    adsenseAccountsAdclientsUrlchannelsList(req: operations.AdsenseAccountsAdclientsUrlchannelsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsUrlchannelsListResponse>;
    /**
     * adsenseAccountsAlertsList - Lists all the alerts available in an account.
    **/
    adsenseAccountsAlertsList(req: operations.AdsenseAccountsAlertsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAlertsListResponse>;
    /**
     * adsenseAccountsGetAdBlockingRecoveryTag - Gets the ad blocking recovery tag of an account.
    **/
    adsenseAccountsGetAdBlockingRecoveryTag(req: operations.AdsenseAccountsGetAdBlockingRecoveryTagRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsGetAdBlockingRecoveryTagResponse>;
    /**
     * adsenseAccountsList - Lists all accounts available to this user.
    **/
    adsenseAccountsList(req: operations.AdsenseAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsListResponse>;
    /**
     * adsenseAccountsListChildAccounts - Lists all accounts directly managed by the given AdSense account.
    **/
    adsenseAccountsListChildAccounts(req: operations.AdsenseAccountsListChildAccountsRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsListChildAccountsResponse>;
    /**
     * adsenseAccountsPaymentsList - Lists all the payments available for an account.
    **/
    adsenseAccountsPaymentsList(req: operations.AdsenseAccountsPaymentsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsPaymentsListResponse>;
    /**
     * adsenseAccountsReportsGenerate - Generates an ad hoc report.
    **/
    adsenseAccountsReportsGenerate(req: operations.AdsenseAccountsReportsGenerateRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsReportsGenerateResponse>;
    /**
     * adsenseAccountsReportsGenerateCsv - Generates a csv formatted ad hoc report.
    **/
    adsenseAccountsReportsGenerateCsv(req: operations.AdsenseAccountsReportsGenerateCsvRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsReportsGenerateCsvResponse>;
    /**
     * adsenseAccountsReportsGetSaved - Gets the saved report from the given resource name.
    **/
    adsenseAccountsReportsGetSaved(req: operations.AdsenseAccountsReportsGetSavedRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsReportsGetSavedResponse>;
    /**
     * adsenseAccountsReportsSavedGenerate - Generates a saved report.
    **/
    adsenseAccountsReportsSavedGenerate(req: operations.AdsenseAccountsReportsSavedGenerateRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsReportsSavedGenerateResponse>;
    /**
     * adsenseAccountsReportsSavedGenerateCsv - Generates a csv formatted saved report.
    **/
    adsenseAccountsReportsSavedGenerateCsv(req: operations.AdsenseAccountsReportsSavedGenerateCsvRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsReportsSavedGenerateCsvResponse>;
    /**
     * adsenseAccountsReportsSavedList - Lists saved reports.
    **/
    adsenseAccountsReportsSavedList(req: operations.AdsenseAccountsReportsSavedListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsReportsSavedListResponse>;
    /**
     * adsenseAccountsSitesGet - Gets information about the selected site.
    **/
    adsenseAccountsSitesGet(req: operations.AdsenseAccountsSitesGetRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsSitesGetResponse>;
    /**
     * adsenseAccountsSitesList - Lists all the sites available in an account.
    **/
    adsenseAccountsSitesList(req: operations.AdsenseAccountsSitesListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsSitesListResponse>;
}
