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
     * addCustomFieldSettingForProject - Add a custom field to a project
     *
     * Custom fields are associated with projects by way of custom field settings.  This method creates a setting for the project.
    **/
    addCustomFieldSettingForProject(req: operations.AddCustomFieldSettingForProjectRequest, config?: AxiosRequestConfig): Promise<operations.AddCustomFieldSettingForProjectResponse>;
    /**
     * addFollowersForProject - Add followers to a project
     *
     * Adds the specified list of users as followers to the project. Followers are a subset of members, therefore if the users are not already members of the project they will also become members as a result of this operation.
     * Returns the updated project record.
    **/
    addFollowersForProject(req: operations.AddFollowersForProjectRequest, config?: AxiosRequestConfig): Promise<operations.AddFollowersForProjectResponse>;
    /**
     * addMembersForProject - Add users to a project
     *
     * Adds the specified list of users as members of the project.
     * Returns the updated project record.
    **/
    addMembersForProject(req: operations.AddMembersForProjectRequest, config?: AxiosRequestConfig): Promise<operations.AddMembersForProjectResponse>;
    /**
     * createProject - Create a project
     *
     * Create a new project in a workspace or team.
     *
     * Every project is required to be created in a specific workspace or
     * organization, and this cannot be changed once set. Note that you can use
     * the `workspace` parameter regardless of whether or not it is an
     * organization.
     *
     * If the workspace for your project is an organization, you must also
     * supply a `team` to share the project with.
     *
     * Returns the full record of the newly created project.
    **/
    createProject(req: operations.CreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectResponse>;
    /**
     * createProjectForTeam - Create a project in a team
     *
     * Creates a project shared with the given team.
     *
     * Returns the full record of the newly created project.
    **/
    createProjectForTeam(req: operations.CreateProjectForTeamRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectForTeamResponse>;
    /**
     * createProjectForWorkspace - Create a project in a workspace
     *
     * Returns the compact project records for all projects in the workspace.
     *
     * If the workspace for your project is an organization, you must also
     * supply a team to share the project with.
     *
     * Returns the full record of the newly created project.
    **/
    createProjectForWorkspace(req: operations.CreateProjectForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectForWorkspaceResponse>;
    /**
     * deleteProject - Delete a project
     *
     * A specific, existing project can be deleted by making a DELETE request on
     * the URL for that project.
     *
     * Returns an empty data record.
    **/
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * duplicateProject - Duplicate a project
     *
     * Creates and returns a job that will asynchronously handle the duplication.
    **/
    duplicateProject(req: operations.DuplicateProjectRequest, config?: AxiosRequestConfig): Promise<operations.DuplicateProjectResponse>;
    /**
     * getProject - Get a project
     *
     * Returns the complete project record for a single project.
    **/
    getProject(req: operations.GetProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectResponse>;
    /**
     * getProjects - Get multiple projects
     *
     * Returns the compact project records for some filtered set of projects. Use one or more of the parameters provided to filter the projects returned.
     * *Note: This endpoint may timeout for large domains. Try filtering by team!*
    **/
    getProjects(req: operations.GetProjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectsResponse>;
    /**
     * getProjectsForTask - Get projects a task is in
     *
     * Returns a compact representation of all of the projects the task is in.
    **/
    getProjectsForTask(req: operations.GetProjectsForTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectsForTaskResponse>;
    /**
     * getProjectsForTeam - Get a team's projects
     *
     * Returns the compact project records for all projects in the team.
    **/
    getProjectsForTeam(req: operations.GetProjectsForTeamRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectsForTeamResponse>;
    /**
     * getProjectsForWorkspace - Get all projects in a workspace
     *
     * Returns the compact project records for all projects in the workspace.
     * *Note: This endpoint may timeout for large domains. Prefer the `/teams/{team_gid}/projects` endpoint.*
    **/
    getProjectsForWorkspace(req: operations.GetProjectsForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectsForWorkspaceResponse>;
    /**
     * getTaskCountsForProject - Get task count of a project
     *
     * Get an object that holds task count fields. **All fields are excluded by default**. You must [opt in](/docs/input-output-options) using `opt_fields` to get any information from this endpoint.
     *
     * This endpoint has an additional [rate limit](/docs/standard-rate-limits) and each field counts especially high against our [cost limits](/docs/cost-limits).
     *
     * Milestones are just tasks, so they are included in the `num_tasks`, `num_incomplete_tasks`, and `num_completed_tasks` counts.
    **/
    getTaskCountsForProject(req: operations.GetTaskCountsForProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskCountsForProjectResponse>;
    /**
     * removeCustomFieldSettingForProject - Remove a custom field from a project
     *
     * Removes a custom field setting from a project.
    **/
    removeCustomFieldSettingForProject(req: operations.RemoveCustomFieldSettingForProjectRequest, config?: AxiosRequestConfig): Promise<operations.RemoveCustomFieldSettingForProjectResponse>;
    /**
     * removeFollowersForProject - Remove followers from a project
     *
     * Removes the specified list of users from following the project, this will not affect project membership status.
     * Returns the updated project record.
    **/
    removeFollowersForProject(req: operations.RemoveFollowersForProjectRequest, config?: AxiosRequestConfig): Promise<operations.RemoveFollowersForProjectResponse>;
    /**
     * removeMembersForProject - Remove users from a project
     *
     * Removes the specified list of users from members of the project.
     * Returns the updated project record.
    **/
    removeMembersForProject(req: operations.RemoveMembersForProjectRequest, config?: AxiosRequestConfig): Promise<operations.RemoveMembersForProjectResponse>;
    /**
     * updateProject - Update a project
     *
     * A specific, existing project can be updated by making a PUT request on
     * the URL for that project. Only the fields provided in the `data` block
     * will be updated; any unspecified fields will remain unchanged.
     *
     * When using this method, it is best to specify only those fields you wish
     * to change, or else you may overwrite changes made by another user since
     * you last retrieved the task.
     *
     * Returns the complete updated project record.
    **/
    updateProject(req: operations.UpdateProjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectResponse>;
}
