import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Stories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createStoryForTask - Create a story on a task
     *
     * Adds a story to a task. This endpoint currently only allows for comment
     * stories to be created. The comment will be authored by the currently
     * authenticated user, and timestamped when the server receives the request.
     *
     * Returns the full record for the new story added to the task.
    **/
    createStoryForTask(req: operations.CreateStoryForTaskRequest, config?: AxiosRequestConfig): Promise<operations.CreateStoryForTaskResponse>;
    /**
     * deleteStory - Delete a story
     *
     * Deletes a story. A user can only delete stories they have created.
     *
     * Returns an empty data record.
    **/
    deleteStory(req: operations.DeleteStoryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStoryResponse>;
    /**
     * getStoriesForTask - Get stories from a task
     *
     * Returns the compact records for all stories on the task.
    **/
    getStoriesForTask(req: operations.GetStoriesForTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetStoriesForTaskResponse>;
    /**
     * getStory - Get a story
     *
     * Returns the full record for a single story.
    **/
    getStory(req: operations.GetStoryRequest, config?: AxiosRequestConfig): Promise<operations.GetStoryResponse>;
    /**
     * updateStory - Update a story
     *
     * Updates the story and returns the full record for the updated story. Only comment stories can have their text updated, and only comment stories and attachment stories can be pinned. Only one of `text` and `html_text` can be specified.
    **/
    updateStory(req: operations.UpdateStoryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStoryResponse>;
}
