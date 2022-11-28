import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tasks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addDependenciesForTask - Set dependencies for a task
     *
     * Marks a set of tasks as dependencies of this task, if they are not already dependencies. *A task can have at most 15 dependencies*.
    **/
    addDependenciesForTask(req: operations.AddDependenciesForTaskRequest, config?: AxiosRequestConfig): Promise<operations.AddDependenciesForTaskResponse>;
    /**
     * addDependentsForTask - Set dependents for a task
     *
     * Marks a set of tasks as dependents of this task, if they are not already dependents. *A task can have at most 30 dependents*.
    **/
    addDependentsForTask(req: operations.AddDependentsForTaskRequest, config?: AxiosRequestConfig): Promise<operations.AddDependentsForTaskResponse>;
    /**
     * addFollowersForTask - Add followers to a task
     *
     * Adds followers to a task. Returns an empty data block.
     * Each task can be associated with zero or more followers in the system.
     * Requests to add/remove followers, if successful, will return the complete updated task record, described above.
    **/
    addFollowersForTask(req: operations.AddFollowersForTaskRequest, config?: AxiosRequestConfig): Promise<operations.AddFollowersForTaskResponse>;
    /**
     * addProjectForTask - Add a project to a task
     *
     * Adds the task to the specified project, in the optional location
     * specified. If no location arguments are given, the task will be added to
     * the end of the project.
     *
     * `addProject` can also be used to reorder a task within a project or
     * section that already contains it.
     *
     * At most one of `insert_before`, `insert_after`, or `section` should be
     * specified. Inserting into a section in an non-order-dependent way can be
     * done by specifying section, otherwise, to insert within a section in a
     * particular place, specify `insert_before` or `insert_after` and a task
     * within the section to anchor the position of this task.
     *
     * Returns an empty data block.
    **/
    addProjectForTask(req: operations.AddProjectForTaskRequest, config?: AxiosRequestConfig): Promise<operations.AddProjectForTaskResponse>;
    /**
     * addTagForTask - Add a tag to a task
     *
     * Adds a tag to a task. Returns an empty data block.
    **/
    addTagForTask(req: operations.AddTagForTaskRequest, config?: AxiosRequestConfig): Promise<operations.AddTagForTaskResponse>;
    /**
     * createSubtaskForTask - Create a subtask
     *
     * Creates a new subtask and adds it to the parent task. Returns the full record for the newly created subtask.
    **/
    createSubtaskForTask(req: operations.CreateSubtaskForTaskRequest, config?: AxiosRequestConfig): Promise<operations.CreateSubtaskForTaskResponse>;
    /**
     * createTask - Create a task
     *
     * Creating a new task is as easy as POSTing to the `/tasks` endpoint with a
     * data block containing the fields you’d like to set on the task. Any
     * unspecified fields will take on default values.
     *
     * Every task is required to be created in a specific workspace, and this
     * workspace cannot be changed once set. The workspace need not be set
     * explicitly if you specify `projects` or a `parent` task instead.
    **/
    createTask(req: operations.CreateTaskRequest, config?: AxiosRequestConfig): Promise<operations.CreateTaskResponse>;
    /**
     * deleteTask - Delete a task
     *
     * A specific, existing task can be deleted by making a DELETE request on
     * the URL for that task. Deleted tasks go into the “trash” of the user
     * making the delete request. Tasks can be recovered from the trash within a
     * period of 30 days; afterward they are completely removed from the system.
     *
     * Returns an empty data record.
    **/
    deleteTask(req: operations.DeleteTaskRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTaskResponse>;
    /**
     * duplicateTask - Duplicate a task
     *
     * Creates and returns a job that will asynchronously handle the duplication.
    **/
    duplicateTask(req: operations.DuplicateTaskRequest, config?: AxiosRequestConfig): Promise<operations.DuplicateTaskResponse>;
    /**
     * getDependenciesForTask - Get dependencies from a task
     *
     * Returns the compact representations of all of the dependencies of a task.
    **/
    getDependenciesForTask(req: operations.GetDependenciesForTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetDependenciesForTaskResponse>;
    /**
     * getDependentsForTask - Get dependents from a task
     *
     * Returns the compact representations of all of the dependents of a task.
    **/
    getDependentsForTask(req: operations.GetDependentsForTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetDependentsForTaskResponse>;
    /**
     * getSubtasksForTask - Get subtasks from a task
     *
     * Returns a compact representation of all of the subtasks of a task.
    **/
    getSubtasksForTask(req: operations.GetSubtasksForTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetSubtasksForTaskResponse>;
    /**
     * getTask - Get a task
     *
     * Returns the complete task record for a single task.
    **/
    getTask(req: operations.GetTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskResponse>;
    /**
     * getTasks - Get multiple tasks
     *
     * Returns the compact task records for some filtered set of tasks. Use one or more of the parameters provided to filter the tasks returned. You must specify a `project` or `tag` if you do not specify `assignee` and `workspace`.
     *
     * For more complex task retrieval, use [workspaces/{workspace_gid}/tasks/search](/docs/search-tasks-in-a-workspace).
    **/
    getTasks(req: operations.GetTasksRequest, config?: AxiosRequestConfig): Promise<operations.GetTasksResponse>;
    /**
     * getTasksForProject - Get tasks from a project
     *
     * Returns the compact task records for all tasks within the given project, ordered by their priority within the project. Tasks can exist in more than one project at a time.
    **/
    getTasksForProject(req: operations.GetTasksForProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetTasksForProjectResponse>;
    /**
     * getTasksForSection - Get tasks from a section
     *
     * *Board view only*: Returns the compact section records for all tasks within the given section.
    **/
    getTasksForSection(req: operations.GetTasksForSectionRequest, config?: AxiosRequestConfig): Promise<operations.GetTasksForSectionResponse>;
    /**
     * getTasksForTag - Get tasks from a tag
     *
     * Returns the compact task records for all tasks with the given tag. Tasks can have more than one tag at a time.
    **/
    getTasksForTag(req: operations.GetTasksForTagRequest, config?: AxiosRequestConfig): Promise<operations.GetTasksForTagResponse>;
    /**
     * getTasksForUserTaskList - Get tasks from a user task list
     *
     * Returns the compact list of tasks in a user’s My Tasks list.
     * *Note: Access control is enforced for this endpoint as with all Asana API endpoints, meaning a user’s private tasks will be filtered out if the API-authenticated user does not have access to them.*
     * *Note: Both complete and incomplete tasks are returned by default unless they are filtered out (for example, setting `completed_since=now` will return only incomplete tasks, which is the default view for “My Tasks” in Asana.)*
    **/
    getTasksForUserTaskList(req: operations.GetTasksForUserTaskListRequest, config?: AxiosRequestConfig): Promise<operations.GetTasksForUserTaskListResponse>;
    /**
     * removeDependenciesForTask - Unlink dependencies from a task
     *
     * Unlinks a set of dependencies from this task.
    **/
    removeDependenciesForTask(req: operations.RemoveDependenciesForTaskRequest, config?: AxiosRequestConfig): Promise<operations.RemoveDependenciesForTaskResponse>;
    /**
     * removeDependentsForTask - Unlink dependents from a task
     *
     * Unlinks a set of dependents from this task.
    **/
    removeDependentsForTask(req: operations.RemoveDependentsForTaskRequest, config?: AxiosRequestConfig): Promise<operations.RemoveDependentsForTaskResponse>;
    /**
     * removeFollowerForTask - Remove followers from a task
     *
     * Removes each of the specified followers from the task if they are following. Returns the complete, updated record for the affected task.
    **/
    removeFollowerForTask(req: operations.RemoveFollowerForTaskRequest, config?: AxiosRequestConfig): Promise<operations.RemoveFollowerForTaskResponse>;
    /**
     * removeProjectForTask - Remove a project from a task
     *
     * Removes the task from the specified project. The task will still exist in
     * the system, but it will not be in the project anymore.
     *
     * Returns an empty data block.
    **/
    removeProjectForTask(req: operations.RemoveProjectForTaskRequest, config?: AxiosRequestConfig): Promise<operations.RemoveProjectForTaskResponse>;
    /**
     * removeTagForTask - Remove a tag from a task
     *
     * Removes a tag from a task. Returns an empty data block.
    **/
    removeTagForTask(req: operations.RemoveTagForTaskRequest, config?: AxiosRequestConfig): Promise<operations.RemoveTagForTaskResponse>;
    /**
     * searchTasksForWorkspace - Search tasks in a workspace
     *
     * To mirror the functionality of the Asana web app's advanced search feature, the Asana API has a task search endpoint that allows you to build complex filters to find and retrieve the exact data you need.
     * #### Premium access
     * Like the Asana web product's advance search feature, this search endpoint will only be available to premium Asana users. A user is premium if any of the following is true:
     *
     * - The workspace in which the search is being performed is a premium workspace - The user is a member of a premium team inside the workspace
     *
     * Even if a user is only a member of a premium team inside a non-premium workspace, search will allow them to find data anywhere in the workspace, not just inside the premium team. Making a search request using credentials of a non-premium user will result in a `402 Payment Required` error.
     * #### Pagination
     * Search results are not stable; repeating the same query multiple times may return the data in a different order, even if the data do not change. Because of this, the traditional [pagination](https://developers.asana.com/docs/#pagination) available elsewhere in the Asana API is not available here. However, you can paginate manually by sorting the search results by their creation time and then modifying each subsequent query to exclude data you have already seen. Page sizes are limited to a maximum of 100 items, and can be specified by the `limit` query parameter.
     * #### Eventual consistency
     * Changes in Asana (regardless of whether they’re made though the web product or the API) are forwarded to our search infrastructure to be indexed. This process can take between 10 and 60 seconds to complete under normal operation, and longer during some production incidents. Making a change to a task that would alter its presence in a particular search query will not be reflected immediately. This is also true of the advanced search feature in the web product.
     * #### Rate limits
     * You may receive a `429 Too Many Requests` response if you hit any of our [rate limits](https://developers.asana.com/docs/#rate-limits).
     * #### Custom field parameters
     * | Parameter name | Custom field type | Accepted type |
     * |---|---|---|
     * | custom_fields.{gid}.is_set | All | Boolean |
     * | custom_fields.{gid}.value | Text | String |
     * | custom_fields.{gid}.value | Number | Number |
     * | custom_fields.{gid}.value | Enum | Enum option ID |
     * | custom_fields.{gid}.starts_with | Text only | String |
     * | custom_fields.{gid}.ends_with | Text only | String |
     * | custom_fields.{gid}.contains | Text only | String |
     * | custom_fields.{gid}.less_than | Number only | Number |
     * | custom_fields.{gid}.greater_than | Number only | Number |
     *
     *
     * For example, if the gid of the custom field is 12345, these query parameter to find tasks where it is set would be `custom_fields.12345.is_set=true`. To match an exact value for an enum custom field, use the gid of the desired enum option and not the name of the enum option: `custom_fields.12345.value=67890`.
     *
     * Searching for multiple exact matches of a custom field is not supported.
     *
     * *Note: If you specify `projects.any` and `sections.any`, you will receive tasks for the project **and** tasks for the section. If you're looking for only tasks in a section, omit the `projects.any` from the request.*
    **/
    searchTasksForWorkspace(req: operations.SearchTasksForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.SearchTasksForWorkspaceResponse>;
    /**
     * setParentForTask - Set the parent of a task
     *
     * parent, or no parent task at all. Returns an empty data block. When using `insert_before` and `insert_after`, at most one of those two options can be specified, and they must already be subtasks of the parent.
    **/
    setParentForTask(req: operations.SetParentForTaskRequest, config?: AxiosRequestConfig): Promise<operations.SetParentForTaskResponse>;
    /**
     * updateTask - Update a task
     *
     * A specific, existing task can be updated by making a PUT request on the
     * URL for that task. Only the fields provided in the `data` block will be
     * updated; any unspecified fields will remain unchanged.
     *
     * When using this method, it is best to specify only those fields you wish
     * to change, or else you may overwrite changes made by another user since
     * you last retrieved the task.
     *
     * Returns the complete updated task record.
    **/
    updateTask(req: operations.UpdateTaskRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTaskResponse>;
}
