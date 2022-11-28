import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createTag - Create a tag
     *
     * Creates a new tag in a workspace or organization.
     *
     * Every tag is required to be created in a specific workspace or
     * organization, and this cannot be changed once set. Note that you can use
     * the workspace parameter regardless of whether or not it is an
     * organization.
     *
     * Returns the full record of the newly created tag.
    **/
    createTag(req: operations.CreateTagRequest, config?: AxiosRequestConfig): Promise<operations.CreateTagResponse>;
    /**
     * createTagForWorkspace - Create a tag in a workspace
     *
     * Creates a new tag in a workspace or organization.
     *
     * Every tag is required to be created in a specific workspace or
     * organization, and this cannot be changed once set. Note that you can use
     * the workspace parameter regardless of whether or not it is an
     * organization.
     *
     * Returns the full record of the newly created tag.
    **/
    createTagForWorkspace(req: operations.CreateTagForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateTagForWorkspaceResponse>;
    /**
     * deleteTag - Delete a tag
     *
     * A specific, existing tag can be deleted by making a DELETE request on
     * the URL for that tag.
     *
     * Returns an empty data record.
    **/
    deleteTag(req: operations.DeleteTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTagResponse>;
    /**
     * getTag - Get a tag
     *
     * Returns the complete tag record for a single tag.
    **/
    getTag(req: operations.GetTagRequest, config?: AxiosRequestConfig): Promise<operations.GetTagResponse>;
    /**
     * getTags - Get multiple tags
     *
     * Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.
    **/
    getTags(req: operations.GetTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsResponse>;
    /**
     * getTagsForTask - Get a task's tags
     *
     * Get a compact representation of all of the tags the task has.
    **/
    getTagsForTask(req: operations.GetTagsForTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsForTaskResponse>;
    /**
     * getTagsForWorkspace - Get tags in a workspace
     *
     * Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.
    **/
    getTagsForWorkspace(req: operations.GetTagsForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsForWorkspaceResponse>;
    /**
     * updateTag - Update a tag
     *
     * Updates the properties of a tag. Only the fields provided in the `data`
     * block will be updated; any unspecified fields will remain unchanged.
     *
     * When using this method, it is best to specify only those fields you wish
     * to change, or else you may overwrite changes made by another user since
     * you last retrieved the tag.
     *
     * Returns the complete updated tag record.
    **/
    updateTag(req: operations.UpdateTagRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTagResponse>;
}
