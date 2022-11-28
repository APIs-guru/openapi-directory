import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addTaskForSection - Add task to section
     *
     * Add a task to a specific, existing section. This will remove the task from other sections of the project.
     *
     * The task will be inserted at the top of a section unless an insert_before or insert_after parameter is declared.
     *
     * This does not work for separators (tasks with the resource_subtype of section).
    **/
    addTaskForSection(req: operations.AddTaskForSectionRequest, config?: AxiosRequestConfig): Promise<operations.AddTaskForSectionResponse>;
    /**
     * createSectionForProject - Create a section in a project
     *
     * Creates a new section in a project.
     * Returns the full record of the newly created section.
    **/
    createSectionForProject(req: operations.CreateSectionForProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateSectionForProjectResponse>;
    /**
     * deleteSection - Delete a section
     *
     * A specific, existing section can be deleted by making a DELETE request on
     * the URL for that section.
     *
     * Note that sections must be empty to be deleted.
     *
     * The last remaining section cannot be deleted.
     *
     * Returns an empty data block.
    **/
    deleteSection(req: operations.DeleteSectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSectionResponse>;
    /**
     * getSection - Get a section
     *
     * Returns the complete record for a single section.
    **/
    getSection(req: operations.GetSectionRequest, config?: AxiosRequestConfig): Promise<operations.GetSectionResponse>;
    /**
     * getSectionsForProject - Get sections in a project
     *
     * Returns the compact records for all sections in the specified project.
    **/
    getSectionsForProject(req: operations.GetSectionsForProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetSectionsForProjectResponse>;
    /**
     * insertSectionForProject - Move or Insert sections
     *
     * Move sections relative to each other. One of
     * `before_section` or `after_section` is required.
     *
     * Sections cannot be moved between projects.
     *
     * Returns an empty data block.
    **/
    insertSectionForProject(req: operations.InsertSectionForProjectRequest, config?: AxiosRequestConfig): Promise<operations.InsertSectionForProjectResponse>;
    /**
     * updateSection - Update a section
     *
     * A specific, existing section can be updated by making a PUT request on
     * the URL for that project. Only the fields provided in the `data` block
     * will be updated; any unspecified fields will remain unchanged. (note that
     * at this time, the only field that can be updated is the `name` field.)
     *
     * When using this method, it is best to specify only those fields you wish
     * to change, or else you may overwrite changes made by another user since
     * you last retrieved the task.
     *
     * Returns the complete updated section record.
    **/
    updateSection(req: operations.UpdateSectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSectionResponse>;
}
