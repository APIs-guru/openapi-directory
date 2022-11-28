import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Notifications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteNotificationsId - Delete Notification
     *
     * Delete Notification
    **/
    deleteNotificationsId(req: operations.DeleteNotificationsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNotificationsIdResponse>;
    /**
     * getNotifications - List Notifications
     *
     * List Notifications
    **/
    getNotifications(req: operations.GetNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.GetNotificationsResponse>;
    /**
     * getNotificationsId - Show Notification
     *
     * Show Notification
    **/
    getNotificationsId(req: operations.GetNotificationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetNotificationsIdResponse>;
    /**
     * patchNotificationsId - Update Notification
     *
     * Update Notification
    **/
    patchNotificationsId(req: operations.PatchNotificationsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchNotificationsIdResponse>;
    /**
     * postNotifications - Create Notification
     *
     * Create Notification
    **/
    postNotifications(req: operations.PostNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.PostNotificationsResponse>;
}
