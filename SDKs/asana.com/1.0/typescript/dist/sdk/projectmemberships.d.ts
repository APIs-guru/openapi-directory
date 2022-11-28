import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ProjectMemberships {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getProjectMembership - Get a project membership
     *
     * Returns the complete project record for a single project membership.
    **/
    getProjectMembership(req: operations.GetProjectMembershipRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectMembershipResponse>;
    /**
     * getProjectMembershipsForProject - Get memberships from a project
     *
     * Returns the compact project membership records for the project.
    **/
    getProjectMembershipsForProject(req: operations.GetProjectMembershipsForProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectMembershipsForProjectResponse>;
}
