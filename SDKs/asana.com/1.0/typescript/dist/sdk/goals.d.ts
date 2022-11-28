import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Goals {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addFollowers - Add a collaborator to a goal
     *
     * Adds followers to a goal. Returns the goal the followers were added to.
     * Each goal can be associated with zero or more followers in the system.
     * Requests to add/remove followers, if successful, will return the complete updated goal record, described above.
    **/
    addFollowers(req: operations.AddFollowersRequest, config?: AxiosRequestConfig): Promise<operations.AddFollowersResponse>;
    /**
     * addSubgoal - Add a subgoal to a parent goal
     *
     * Adds a subgoal to a parent goal. *A goal can have at most 100 subgoals, and a subgoal can have at most 4 parent goals.
     *
     * Returns an empty data block.
    **/
    addSubgoal(req: operations.AddSubgoalRequest, config?: AxiosRequestConfig): Promise<operations.AddSubgoalResponse>;
    /**
     * addSupportingWorkForGoal - Add a project/portfolio as supporting work for a goal.
     *
     * Adds a project or portfolio as supporting work for a goal. *A goal can have at most 10 supporting projects/portfolios, and a project/portfolio can support at most 10 goals*.
    **/
    addSupportingWorkForGoal(req: operations.AddSupportingWorkForGoalRequest, config?: AxiosRequestConfig): Promise<operations.AddSupportingWorkForGoalResponse>;
    /**
     * createGoal - Create a goal
     *
     * Creates a new goal in a workspace or team.
     *
     * Returns the full record of the newly created goal.
    **/
    createGoal(req: operations.CreateGoalRequest, config?: AxiosRequestConfig): Promise<operations.CreateGoalResponse>;
    /**
     * createGoalMetric - Create a goal metric
     *
     * Creates and adds a goal metric to a specified goal. Note that this replaces an existing goal metric if one already exists.
    **/
    createGoalMetric(req: operations.CreateGoalMetricRequest, config?: AxiosRequestConfig): Promise<operations.CreateGoalMetricResponse>;
    /**
     * deleteGoal - Delete a goal
     *
     * A specific, existing goal can be deleted by making a DELETE request on the URL for that goal.
     *
     * Returns an empty data record.
    **/
    deleteGoal(req: operations.DeleteGoalRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGoalResponse>;
    /**
     * getGoal - Get a goal
     *
     * Returns the complete goal record for a single goal.
    **/
    getGoal(req: operations.GetGoalRequest, config?: AxiosRequestConfig): Promise<operations.GetGoalResponse>;
    /**
     * getGoals - Get goals
     *
     * Returns compact goal records.
    **/
    getGoals(req: operations.GetGoalsRequest, config?: AxiosRequestConfig): Promise<operations.GetGoalsResponse>;
    /**
     * getParentGoalsForGoal - Get parent goals from a goal
     *
     * Returns a compact representation of all of the parent goals of a goal.
    **/
    getParentGoalsForGoal(req: operations.GetParentGoalsForGoalRequest, config?: AxiosRequestConfig): Promise<operations.GetParentGoalsForGoalResponse>;
    /**
     * getSubgoalsForGoal - Get subgoals from a goal
     *
     * Returns a compact representation of all of the subgoals of a goal.
    **/
    getSubgoalsForGoal(req: operations.GetSubgoalsForGoalRequest, config?: AxiosRequestConfig): Promise<operations.GetSubgoalsForGoalResponse>;
    /**
     * removeFollowers - Remove a collaborator from a goal
     *
     * Removes followers from a goal. Returns the goal the followers were removed from.
     * Each goal can be associated with zero or more followers in the system.
     * Requests to add/remove followers, if successful, will return the complete updated goal record, described above.
    **/
    removeFollowers(req: operations.RemoveFollowersRequest, config?: AxiosRequestConfig): Promise<operations.RemoveFollowersResponse>;
    /**
     * removeSubgoal - Remove a subgoal from a goal
     *
     * Removes a goal as a subgoal of a specified parent goal.
    **/
    removeSubgoal(req: operations.RemoveSubgoalRequest, config?: AxiosRequestConfig): Promise<operations.RemoveSubgoalResponse>;
    /**
     * removeSupportingWorkForGoal - Remove a project/portfolio as supporting work for a goal.
     *
     * Removes a project or portfolio as supporting work for a goal.
    **/
    removeSupportingWorkForGoal(req: operations.RemoveSupportingWorkForGoalRequest, config?: AxiosRequestConfig): Promise<operations.RemoveSupportingWorkForGoalResponse>;
    /**
     * supportingWork - Get supporting work from a goal
     *
     * Returns any portfolios or projects associated with specified goal.
    **/
    supportingWork(req: operations.SupportingWorkRequest, config?: AxiosRequestConfig): Promise<operations.SupportingWorkResponse>;
    /**
     * updateGoal - Update a goal
     *
     * An existing goal can be updated by making a PUT request on the URL for
     * that goal. Only the fields provided in the `data` block will be updated;
     * any unspecified fields will remain unchanged.
     *
     * Returns the complete updated goal record.
    **/
    updateGoal(req: operations.UpdateGoalRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGoalResponse>;
    /**
     * updateGoalMetric - Update a goal metric
     *
     * Updates a goal's existing metric's `current_number_value` if one exists,
     * otherwise responds with a 400 status code.
     *
     * Returns the complete updated goal metric record.
    **/
    updateGoalMetric(req: operations.UpdateGoalMetricRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGoalMetricResponse>;
}
