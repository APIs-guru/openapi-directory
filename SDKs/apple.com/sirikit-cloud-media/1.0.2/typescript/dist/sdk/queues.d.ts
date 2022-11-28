import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Queues {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * playMediaOnQueue - playMedia
    **/
    playMediaOnQueue(req: operations.PlayMediaOnQueueRequest, config?: AxiosRequestConfig): Promise<operations.PlayMediaOnQueueResponse>;
    /**
     * updateActivityOnQueue - updateActivity
    **/
    updateActivityOnQueue(req: operations.UpdateActivityOnQueueRequest, config?: AxiosRequestConfig): Promise<operations.UpdateActivityOnQueueResponse>;
}
