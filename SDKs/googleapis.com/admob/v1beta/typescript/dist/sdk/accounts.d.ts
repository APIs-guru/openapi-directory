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
     * admobAccountsAdSourcesList - List the ad sources.
    **/
    admobAccountsAdSourcesList(req: operations.AdmobAccountsAdSourcesListRequest, config?: AxiosRequestConfig): Promise<operations.AdmobAccountsAdSourcesListResponse>;
    /**
     * admobAccountsAdUnitsList - List the ad units under the specified AdMob account.
    **/
    admobAccountsAdUnitsList(req: operations.AdmobAccountsAdUnitsListRequest, config?: AxiosRequestConfig): Promise<operations.AdmobAccountsAdUnitsListResponse>;
    /**
     * admobAccountsAppsList - List the apps under the specified AdMob account.
    **/
    admobAccountsAppsList(req: operations.AdmobAccountsAppsListRequest, config?: AxiosRequestConfig): Promise<operations.AdmobAccountsAppsListResponse>;
    /**
     * admobAccountsGet - Gets information about the specified AdMob publisher account.
    **/
    admobAccountsGet(req: operations.AdmobAccountsGetRequest, config?: AxiosRequestConfig): Promise<operations.AdmobAccountsGetResponse>;
    /**
     * admobAccountsList - Lists the AdMob publisher account that was most recently signed in to from the AdMob UI. For more information, see https://support.google.com/admob/answer/10243672.
    **/
    admobAccountsList(req: operations.AdmobAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.AdmobAccountsListResponse>;
    /**
     * admobAccountsMediationReportGenerate - Generates an AdMob mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
    **/
    admobAccountsMediationReportGenerate(req: operations.AdmobAccountsMediationReportGenerateRequest, config?: AxiosRequestConfig): Promise<operations.AdmobAccountsMediationReportGenerateResponse>;
    /**
     * admobAccountsNetworkReportGenerate - Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
    **/
    admobAccountsNetworkReportGenerate(req: operations.AdmobAccountsNetworkReportGenerateRequest, config?: AxiosRequestConfig): Promise<operations.AdmobAccountsNetworkReportGenerateResponse>;
}
