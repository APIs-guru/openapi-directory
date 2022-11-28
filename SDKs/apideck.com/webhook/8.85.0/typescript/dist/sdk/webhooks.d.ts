import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Webhooks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * webhooksAdd - Create webhook
     *
     * Create webhook
    **/
    webhooksAdd(req: operations.WebhooksAddRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksAddResponse>;
    /**
     * webhooksAll - List webhooks
     *
     * List webhooks
    **/
    webhooksAll(req: operations.WebhooksAllRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksAllResponse>;
    /**
     * webhooksDelete - Delete webhook
     *
     * Delete webhook
    **/
    webhooksDelete(req: operations.WebhooksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksDeleteResponse>;
    /**
     * webhooksExecute - Execute a webhook
     *
     * Execute a webhook
    **/
    webhooksExecute(req: operations.WebhooksExecuteRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksExecuteResponse>;
    /**
     * webhooksOne - Get webhook
     *
     * Get webhook
    **/
    webhooksOne(req: operations.WebhooksOneRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksOneResponse>;
    /**
     * webhooksResolve - Resolve and Execute a connection webhook
     *
     * Resolve a webhook based on lookup_id and then execute it
    **/
    webhooksResolve(req: operations.WebhooksResolveRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksResolveResponse>;
    /**
     * webhooksShortExecute - Execute a webhook
     *
     * Execute a webhook
    **/
    webhooksShortExecute(req: operations.WebhooksShortExecuteRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksShortExecuteResponse>;
    /**
     * webhooksUpdate - Update webhook
     *
     * Update webhook
    **/
    webhooksUpdate(req: operations.WebhooksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksUpdateResponse>;
}
