import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Data {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * analyticsDataGet - Returns Analytics report data for a view (profile).
    **/
    analyticsDataGet(req: operations.AnalyticsDataGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsDataGetResponse>;
}
