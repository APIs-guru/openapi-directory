import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Info {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getInfoTld - Returns overall Tld info
    **/
    getInfoTld(config?: AxiosRequestConfig): Promise<operations.GetInfoTldResponse>;
    /**
     * getInfoTldZone - Returns statistics for specific zone
    **/
    getInfoTldZone(req: operations.GetInfoTldZoneRequest, config?: AxiosRequestConfig): Promise<operations.GetInfoTldZoneResponse>;
    getApiInfoItem(req: operations.GetApiInfoItemRequest, config?: AxiosRequestConfig): Promise<operations.GetApiInfoItemResponse>;
    /**
     * getStatisticsCollection - Returns overall stagtistics
    **/
    getStatisticsCollection(req: operations.GetStatisticsCollectionRequest, config?: AxiosRequestConfig): Promise<operations.GetStatisticsCollectionResponse>;
    /**
     * getStatisticsItem - Returns statistics for specific zone
    **/
    getStatisticsItem(req: operations.GetStatisticsItemRequest, config?: AxiosRequestConfig): Promise<operations.GetStatisticsItemResponse>;
}
