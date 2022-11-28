import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * accessapprovalProjectsApprovalRequestsApprove - Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
    **/
    accessapprovalProjectsApprovalRequestsApprove(req: operations.AccessapprovalProjectsApprovalRequestsApproveRequest, config?: AxiosRequestConfig): Promise<operations.AccessapprovalProjectsApprovalRequestsApproveResponse>;
    /**
     * accessapprovalProjectsApprovalRequestsDismiss - Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
    **/
    accessapprovalProjectsApprovalRequestsDismiss(req: operations.AccessapprovalProjectsApprovalRequestsDismissRequest, config?: AxiosRequestConfig): Promise<operations.AccessapprovalProjectsApprovalRequestsDismissResponse>;
    /**
     * accessapprovalProjectsApprovalRequestsGet - Gets an approval request. Returns NOT_FOUND if the request does not exist.
    **/
    accessapprovalProjectsApprovalRequestsGet(req: operations.AccessapprovalProjectsApprovalRequestsGetRequest, config?: AxiosRequestConfig): Promise<operations.AccessapprovalProjectsApprovalRequestsGetResponse>;
    /**
     * accessapprovalProjectsApprovalRequestsInvalidate - Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.
    **/
    accessapprovalProjectsApprovalRequestsInvalidate(req: operations.AccessapprovalProjectsApprovalRequestsInvalidateRequest, config?: AxiosRequestConfig): Promise<operations.AccessapprovalProjectsApprovalRequestsInvalidateResponse>;
    /**
     * accessapprovalProjectsApprovalRequestsList - Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.
    **/
    accessapprovalProjectsApprovalRequestsList(req: operations.AccessapprovalProjectsApprovalRequestsListRequest, config?: AxiosRequestConfig): Promise<operations.AccessapprovalProjectsApprovalRequestsListResponse>;
    /**
     * accessapprovalProjectsDeleteAccessApprovalSettings - Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.
    **/
    accessapprovalProjectsDeleteAccessApprovalSettings(req: operations.AccessapprovalProjectsDeleteAccessApprovalSettingsRequest, config?: AxiosRequestConfig): Promise<operations.AccessapprovalProjectsDeleteAccessApprovalSettingsResponse>;
    /**
     * accessapprovalProjectsUpdateAccessApprovalSettings - Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.
    **/
    accessapprovalProjectsUpdateAccessApprovalSettings(req: operations.AccessapprovalProjectsUpdateAccessApprovalSettingsRequest, config?: AxiosRequestConfig): Promise<operations.AccessapprovalProjectsUpdateAccessApprovalSettingsResponse>;
}
