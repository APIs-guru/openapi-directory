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
     * adsenseAccountsAdclientsGetAdCode - Get Auto ad code for a given ad client.
    **/
    adsenseAccountsAdclientsGetAdCode(req: operations.AdsenseAccountsAdclientsGetAdCodeRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsGetAdCodeResponse>;
    /**
     * adsenseAccountsAdclientsList - List all ad clients in the specified account.
    **/
    adsenseAccountsAdclientsList(req: operations.AdsenseAccountsAdclientsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsListResponse>;
    /**
     * adsenseAccountsAdunitsCustomchannelsList - List all custom channels which the specified ad unit belongs to.
    **/
    adsenseAccountsAdunitsCustomchannelsList(req: operations.AdsenseAccountsAdunitsCustomchannelsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdunitsCustomchannelsListResponse>;
    /**
     * adsenseAccountsAdunitsGet - Gets the specified ad unit in the specified ad client for the specified account.
    **/
    adsenseAccountsAdunitsGet(req: operations.AdsenseAccountsAdunitsGetRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdunitsGetResponse>;
    /**
     * adsenseAccountsAdunitsGetAdCode - Get ad code for the specified ad unit.
    **/
    adsenseAccountsAdunitsGetAdCode(req: operations.AdsenseAccountsAdunitsGetAdCodeRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdunitsGetAdCodeResponse>;
    /**
     * adsenseAccountsAdunitsList - List all ad units in the specified ad client for the specified account.
    **/
    adsenseAccountsAdunitsList(req: operations.AdsenseAccountsAdunitsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdunitsListResponse>;
    /**
     * adsenseAccountsAlertsDelete - Dismiss (delete) the specified alert from the specified publisher AdSense account.
    **/
    adsenseAccountsAlertsDelete(req: operations.AdsenseAccountsAlertsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAlertsDeleteResponse>;
    /**
     * adsenseAccountsAlertsList - List the alerts for the specified AdSense account.
    **/
    adsenseAccountsAlertsList(req: operations.AdsenseAccountsAlertsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAlertsListResponse>;
    /**
     * adsenseAccountsCustomchannelsAdunitsList - List all ad units in the specified custom channel.
    **/
    adsenseAccountsCustomchannelsAdunitsList(req: operations.AdsenseAccountsCustomchannelsAdunitsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsCustomchannelsAdunitsListResponse>;
    /**
     * adsenseAccountsCustomchannelsGet - Get the specified custom channel from the specified ad client for the specified account.
    **/
    adsenseAccountsCustomchannelsGet(req: operations.AdsenseAccountsCustomchannelsGetRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsCustomchannelsGetResponse>;
    /**
     * adsenseAccountsCustomchannelsList - List all custom channels in the specified ad client for the specified account.
    **/
    adsenseAccountsCustomchannelsList(req: operations.AdsenseAccountsCustomchannelsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsCustomchannelsListResponse>;
    /**
     * adsenseAccountsGet - Get information about the selected AdSense account.
    **/
    adsenseAccountsGet(req: operations.AdsenseAccountsGetRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsGetResponse>;
    /**
     * adsenseAccountsList - List all accounts available to this AdSense account.
    **/
    adsenseAccountsList(req: operations.AdsenseAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsListResponse>;
    /**
     * adsenseAccountsPaymentsList - List the payments for the specified AdSense account.
    **/
    adsenseAccountsPaymentsList(req: operations.AdsenseAccountsPaymentsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsPaymentsListResponse>;
    /**
     * adsenseAccountsReportsGenerate - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
    **/
    adsenseAccountsReportsGenerate(req: operations.AdsenseAccountsReportsGenerateRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsReportsGenerateResponse>;
    /**
     * adsenseAccountsReportsSavedGenerate - Generate an AdSense report based on the saved report ID sent in the query parameters.
    **/
    adsenseAccountsReportsSavedGenerate(req: operations.AdsenseAccountsReportsSavedGenerateRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsReportsSavedGenerateResponse>;
    /**
     * adsenseAccountsReportsSavedList - List all saved reports in the specified AdSense account.
    **/
    adsenseAccountsReportsSavedList(req: operations.AdsenseAccountsReportsSavedListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsReportsSavedListResponse>;
    /**
     * adsenseAccountsSavedadstylesGet - List a specific saved ad style for the specified account.
    **/
    adsenseAccountsSavedadstylesGet(req: operations.AdsenseAccountsSavedadstylesGetRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsSavedadstylesGetResponse>;
    /**
     * adsenseAccountsSavedadstylesList - List all saved ad styles in the specified account.
    **/
    adsenseAccountsSavedadstylesList(req: operations.AdsenseAccountsSavedadstylesListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsSavedadstylesListResponse>;
    /**
     * adsenseAccountsUrlchannelsList - List all URL channels in the specified ad client for the specified account.
    **/
    adsenseAccountsUrlchannelsList(req: operations.AdsenseAccountsUrlchannelsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsUrlchannelsListResponse>;
}
