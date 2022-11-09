import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Create webhook
    **/
    WebhooksAdd(req: operations.WebhooksAddRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksAddResponse>;
    /**
     * List webhooks
    **/
    WebhooksAll(req: operations.WebhooksAllRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksAllResponse>;
    /**
     * Delete webhook
    **/
    WebhooksDelete(req: operations.WebhooksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksDeleteResponse>;
    /**
     * Execute a webhook
    **/
    WebhooksExecute(req: operations.WebhooksExecuteRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksExecuteResponse>;
    /**
     * Get webhook
    **/
    WebhooksOne(req: operations.WebhooksOneRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksOneResponse>;
    /**
     * Execute a webhook
    **/
    WebhooksShortExecute(req: operations.WebhooksShortExecuteRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksShortExecuteResponse>;
    /**
     * Update webhook
    **/
    WebhooksUpdate(req: operations.WebhooksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksUpdateResponse>;
}
export {};
