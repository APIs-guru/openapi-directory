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
     * reportsActivitiesList - Retrieves a list of activities for a specific customer's account and application such as the Admin console application or the Google Drive application. For more information, see the guides for administrator and Google Drive activity reports. For more information about the activity report's parameters, see the activity parameters reference guides.
    **/
    reportsActivitiesList(req: operations.ReportsActivitiesListRequest, config?: AxiosRequestConfig): Promise<operations.ReportsActivitiesListResponse>;
    /**
     * reportsActivitiesWatch - Start receiving notifications for account activities. For more information, see Receiving Push Notifications.
    **/
    reportsActivitiesWatch(req: operations.ReportsActivitiesWatchRequest, config?: AxiosRequestConfig): Promise<operations.ReportsActivitiesWatchResponse>;
}
