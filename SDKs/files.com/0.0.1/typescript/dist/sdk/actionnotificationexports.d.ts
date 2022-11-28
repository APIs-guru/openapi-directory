import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ActionNotificationExports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getActionNotificationExportsId - Show Action Notification Export
     *
     * Show Action Notification Export
    **/
    getActionNotificationExportsId(req: operations.GetActionNotificationExportsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetActionNotificationExportsIdResponse>;
    /**
     * postActionNotificationExports - Create Action Notification Export
     *
     * Create Action Notification Export
    **/
    postActionNotificationExports(req: operations.PostActionNotificationExportsRequest, config?: AxiosRequestConfig): Promise<operations.PostActionNotificationExportsResponse>;
}
