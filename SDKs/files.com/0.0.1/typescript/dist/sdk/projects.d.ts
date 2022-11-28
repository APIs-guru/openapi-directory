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
     * deleteProjectsId - Delete Project
     *
     * Delete Project
    **/
    deleteProjectsId(req: operations.DeleteProjectsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectsIdResponse>;
    /**
     * getProjects - List Projects
     *
     * List Projects
    **/
    getProjects(req: operations.GetProjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectsResponse>;
    /**
     * getProjectsId - Show Project
     *
     * Show Project
    **/
    getProjectsId(req: operations.GetProjectsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectsIdResponse>;
    /**
     * patchProjectsId - Update Project
     *
     * Update Project
    **/
    patchProjectsId(req: operations.PatchProjectsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchProjectsIdResponse>;
    /**
     * postProjects - Create Project
     *
     * Create Project
    **/
    postProjects(req: operations.PostProjectsRequest, config?: AxiosRequestConfig): Promise<operations.PostProjectsResponse>;
}
