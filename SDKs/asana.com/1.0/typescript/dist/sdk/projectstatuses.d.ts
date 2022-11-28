import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ProjectStatuses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createProjectStatusForProject - Create a project status
     *
     * Creates a new status update on the project.
     * Returns the full record of the newly created project status update.
    **/
    createProjectStatusForProject(req: operations.CreateProjectStatusForProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectStatusForProjectResponse>;
    /**
     * deleteProjectStatus - Delete a project status
     *
     * Deletes a specific, existing project status update.
     *
     * Returns an empty data record.
    **/
    deleteProjectStatus(req: operations.DeleteProjectStatusRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectStatusResponse>;
    /**
     * getProjectStatus - Get a project status
     *
     * Returns the complete record for a single status update.
    **/
    getProjectStatus(req: operations.GetProjectStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectStatusResponse>;
    /**
     * getProjectStatusesForProject - Get statuses from a project
     *
     * Returns the compact project status update records for all updates on the project.
    **/
    getProjectStatusesForProject(req: operations.GetProjectStatusesForProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectStatusesForProjectResponse>;
}
