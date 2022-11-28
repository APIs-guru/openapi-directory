import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Pipelines {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * pipelinesAdd - Create pipeline
     *
     * Create pipeline
    **/
    pipelinesAdd(req: operations.PipelinesAddRequest, config?: AxiosRequestConfig): Promise<operations.PipelinesAddResponse>;
    /**
     * pipelinesAll - List pipelines
     *
     * List pipelines
    **/
    pipelinesAll(req: operations.PipelinesAllRequest, config?: AxiosRequestConfig): Promise<operations.PipelinesAllResponse>;
    /**
     * pipelinesDelete - Delete pipeline
     *
     * Delete pipeline
    **/
    pipelinesDelete(req: operations.PipelinesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PipelinesDeleteResponse>;
    /**
     * pipelinesOne - Get pipeline
     *
     * Get pipeline
    **/
    pipelinesOne(req: operations.PipelinesOneRequest, config?: AxiosRequestConfig): Promise<operations.PipelinesOneResponse>;
    /**
     * pipelinesUpdate - Update pipeline
     *
     * Update pipeline
    **/
    pipelinesUpdate(req: operations.PipelinesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PipelinesUpdateResponse>;
}
