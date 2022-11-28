import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Consumers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * consumerRequestCountsAll - Consumer request counts
     *
     * Get consumer request counts within a given datetime range.
     *
    **/
    consumerRequestCountsAll(req: operations.ConsumerRequestCountsAllRequest, config?: AxiosRequestConfig): Promise<operations.ConsumerRequestCountsAllResponse>;
    /**
     * consumersAll - Get all consumers
     *
     * This endpoint includes all application consumers, along with an aggregated count of requests made.
     *
    **/
    consumersAll(req: operations.ConsumersAllRequest, config?: AxiosRequestConfig): Promise<operations.ConsumersAllResponse>;
    /**
     * consumersOne - Get consumer
     *
     * Consumer detail including their aggregated counts with the connections they have authorized.
     *
    **/
    consumersOne(req: operations.ConsumersOneRequest, config?: AxiosRequestConfig): Promise<operations.ConsumersOneResponse>;
}
