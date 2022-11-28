import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A response object returned from the task count endpoint.
**/
export declare class TaskCountResponse extends SpeakeasyBase {
    numCompletedMilestones?: number;
    numCompletedTasks?: number;
    numIncompleteMilestones?: number;
    numIncompleteTasks?: number;
    numMilestones?: number;
    numTasks?: number;
}
