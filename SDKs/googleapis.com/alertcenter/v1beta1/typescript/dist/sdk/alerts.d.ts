import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Alerts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * alertcenterAlertsBatchDelete - Performs batch delete operation on alerts.
    **/
    alertcenterAlertsBatchDelete(req: operations.AlertcenterAlertsBatchDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsBatchDeleteResponse>;
    /**
     * alertcenterAlertsBatchUndelete - Performs batch undelete operation on alerts.
    **/
    alertcenterAlertsBatchUndelete(req: operations.AlertcenterAlertsBatchUndeleteRequest, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsBatchUndeleteResponse>;
    /**
     * alertcenterAlertsDelete - Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.
    **/
    alertcenterAlertsDelete(req: operations.AlertcenterAlertsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsDeleteResponse>;
    /**
     * alertcenterAlertsFeedbackCreate - Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error.
    **/
    alertcenterAlertsFeedbackCreate(req: operations.AlertcenterAlertsFeedbackCreateRequest, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsFeedbackCreateResponse>;
    /**
     * alertcenterAlertsFeedbackList - Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.
    **/
    alertcenterAlertsFeedbackList(req: operations.AlertcenterAlertsFeedbackListRequest, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsFeedbackListResponse>;
    /**
     * alertcenterAlertsGet - Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error.
    **/
    alertcenterAlertsGet(req: operations.AlertcenterAlertsGetRequest, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsGetResponse>;
    /**
     * alertcenterAlertsGetMetadata - Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.
    **/
    alertcenterAlertsGetMetadata(req: operations.AlertcenterAlertsGetMetadataRequest, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsGetMetadataResponse>;
    /**
     * alertcenterAlertsList - Lists the alerts.
    **/
    alertcenterAlertsList(req: operations.AlertcenterAlertsListRequest, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsListResponse>;
    /**
     * alertcenterAlertsUndelete - Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.
    **/
    alertcenterAlertsUndelete(req: operations.AlertcenterAlertsUndeleteRequest, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsUndeleteResponse>;
}
