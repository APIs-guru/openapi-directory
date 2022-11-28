import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UserTaskLists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getUserTaskList - Get a user task list
     *
     * Returns the full record for a user task list.
    **/
    getUserTaskList(req: operations.GetUserTaskListRequest, config?: AxiosRequestConfig): Promise<operations.GetUserTaskListResponse>;
    /**
     * getUserTaskListForUser - Get a user's task list
     *
     * Returns the full record for a user's task list.
    **/
    getUserTaskListForUser(req: operations.GetUserTaskListForUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserTaskListForUserResponse>;
}
