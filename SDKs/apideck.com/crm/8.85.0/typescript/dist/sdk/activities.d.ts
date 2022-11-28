import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Activities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * activitiesAdd - Create activity
     *
     * Create activity
    **/
    activitiesAdd(req: operations.ActivitiesAddRequest, config?: AxiosRequestConfig): Promise<operations.ActivitiesAddResponse>;
    /**
     * activitiesAll - List activities
     *
     * List activities
    **/
    activitiesAll(req: operations.ActivitiesAllRequest, config?: AxiosRequestConfig): Promise<operations.ActivitiesAllResponse>;
    /**
     * activitiesDelete - Delete activity
     *
     * Delete activity
    **/
    activitiesDelete(req: operations.ActivitiesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ActivitiesDeleteResponse>;
    /**
     * activitiesOne - Get activity
     *
     * Get activity
    **/
    activitiesOne(req: operations.ActivitiesOneRequest, config?: AxiosRequestConfig): Promise<operations.ActivitiesOneResponse>;
    /**
     * activitiesUpdate - Update activity
     *
     * Update activity
    **/
    activitiesUpdate(req: operations.ActivitiesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ActivitiesUpdateResponse>;
}
