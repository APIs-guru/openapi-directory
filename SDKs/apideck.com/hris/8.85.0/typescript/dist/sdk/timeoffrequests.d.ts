import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TimeOffRequests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * timeOffRequestsAdd - Create Time Off Request
     *
     * Create Time Off Request
    **/
    timeOffRequestsAdd(req: operations.TimeOffRequestsAddRequest, config?: AxiosRequestConfig): Promise<operations.TimeOffRequestsAddResponse>;
    /**
     * timeOffRequestsAll - List Time Off Requests
     *
     * List Time Off Requests
    **/
    timeOffRequestsAll(req: operations.TimeOffRequestsAllRequest, config?: AxiosRequestConfig): Promise<operations.TimeOffRequestsAllResponse>;
    /**
     * timeOffRequestsDelete - Delete Time Off Request
     *
     * Delete Time Off Request
    **/
    timeOffRequestsDelete(req: operations.TimeOffRequestsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TimeOffRequestsDeleteResponse>;
    /**
     * timeOffRequestsOne - Get Time Off Request
     *
     * Get Time Off Request
    **/
    timeOffRequestsOne(req: operations.TimeOffRequestsOneRequest, config?: AxiosRequestConfig): Promise<operations.TimeOffRequestsOneResponse>;
    /**
     * timeOffRequestsUpdate - Update Time Off Request
     *
     * Update Time Off Request
    **/
    timeOffRequestsUpdate(req: operations.TimeOffRequestsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TimeOffRequestsUpdateResponse>;
}
