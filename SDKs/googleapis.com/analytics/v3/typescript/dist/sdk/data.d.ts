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
     * analyticsDataGaGet - Returns Analytics data for a view (profile).
    **/
    analyticsDataGaGet(req: operations.AnalyticsDataGaGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsDataGaGetResponse>;
    /**
     * analyticsDataMcfGet - Returns Analytics Multi-Channel Funnels data for a view (profile).
    **/
    analyticsDataMcfGet(req: operations.AnalyticsDataMcfGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsDataMcfGetResponse>;
    /**
     * analyticsDataRealtimeGet - Returns real time data for a view (profile).
    **/
    analyticsDataRealtimeGet(req: operations.AnalyticsDataRealtimeGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsDataRealtimeGetResponse>;
}
