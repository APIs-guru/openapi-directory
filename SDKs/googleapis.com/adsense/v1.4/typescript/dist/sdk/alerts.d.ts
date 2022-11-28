import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Alerts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adsenseAlertsDelete - Dismiss (delete) the specified alert from the publisher's AdSense account.
    **/
    adsenseAlertsDelete(req: operations.AdsenseAlertsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAlertsDeleteResponse>;
    /**
     * adsenseAlertsList - List the alerts for this AdSense account.
    **/
    adsenseAlertsList(req: operations.AdsenseAlertsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAlertsListResponse>;
}
