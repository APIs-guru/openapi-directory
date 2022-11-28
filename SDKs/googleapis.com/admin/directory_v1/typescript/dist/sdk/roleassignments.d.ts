import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RoleAssignments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * directoryRoleAssignmentsDelete - Deletes a role assignment.
    **/
    directoryRoleAssignmentsDelete(req: operations.DirectoryRoleAssignmentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryRoleAssignmentsDeleteResponse>;
    /**
     * directoryRoleAssignmentsGet - Retrieves a role assignment.
    **/
    directoryRoleAssignmentsGet(req: operations.DirectoryRoleAssignmentsGetRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryRoleAssignmentsGetResponse>;
    /**
     * directoryRoleAssignmentsInsert - Creates a role assignment.
    **/
    directoryRoleAssignmentsInsert(req: operations.DirectoryRoleAssignmentsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryRoleAssignmentsInsertResponse>;
    /**
     * directoryRoleAssignmentsList - Retrieves a paginated list of all roleAssignments.
    **/
    directoryRoleAssignmentsList(req: operations.DirectoryRoleAssignmentsListRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryRoleAssignmentsListResponse>;
}
