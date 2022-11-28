import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Metadata {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adsenseMetadataDimensionsList - List the metadata for the dimensions available to this AdSense account.
    **/
    adsenseMetadataDimensionsList(req: operations.AdsenseMetadataDimensionsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseMetadataDimensionsListResponse>;
    /**
     * adsenseMetadataMetricsList - List the metadata for the metrics available to this AdSense account.
    **/
    adsenseMetadataMetricsList(req: operations.AdsenseMetadataMetricsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseMetadataMetricsListResponse>;
}
