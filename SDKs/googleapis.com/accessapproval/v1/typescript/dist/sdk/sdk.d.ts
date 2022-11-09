import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    AccessapprovalProjectsApprovalRequestsApprove(req: operations.AccessapprovalProjectsApprovalRequestsApproveRequest, config?: AxiosRequestConfig): Promise<operations.AccessapprovalProjectsApprovalRequestsApproveResponse>;
    AccessapprovalProjectsApprovalRequestsDismiss(req: operations.AccessapprovalProjectsApprovalRequestsDismissRequest, config?: AxiosRequestConfig): Promise<operations.AccessapprovalProjectsApprovalRequestsDismissResponse>;
    AccessapprovalProjectsApprovalRequestsGet(req: operations.AccessapprovalProjectsApprovalRequestsGetRequest, config?: AxiosRequestConfig): Promise<operations.AccessapprovalProjectsApprovalRequestsGetResponse>;
    AccessapprovalProjectsApprovalRequestsInvalidate(req: operations.AccessapprovalProjectsApprovalRequestsInvalidateRequest, config?: AxiosRequestConfig): Promise<operations.AccessapprovalProjectsApprovalRequestsInvalidateResponse>;
    AccessapprovalProjectsApprovalRequestsList(req: operations.AccessapprovalProjectsApprovalRequestsListRequest, config?: AxiosRequestConfig): Promise<operations.AccessapprovalProjectsApprovalRequestsListResponse>;
    AccessapprovalProjectsDeleteAccessApprovalSettings(req: operations.AccessapprovalProjectsDeleteAccessApprovalSettingsRequest, config?: AxiosRequestConfig): Promise<operations.AccessapprovalProjectsDeleteAccessApprovalSettingsResponse>;
    AccessapprovalProjectsUpdateAccessApprovalSettings(req: operations.AccessapprovalProjectsUpdateAccessApprovalSettingsRequest, config?: AxiosRequestConfig): Promise<operations.AccessapprovalProjectsUpdateAccessApprovalSettingsResponse>;
}
export {};
