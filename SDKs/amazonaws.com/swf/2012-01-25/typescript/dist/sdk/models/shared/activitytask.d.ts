import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityType } from "./activitytype";
import { WorkflowExecution } from "./workflowexecution";
/**
 * Unit of work sent to an activity worker.
**/
export declare class ActivityTask extends SpeakeasyBase {
    activityId: string;
    activityType: ActivityType;
    input?: string;
    startedEventId: number;
    taskToken: string;
    workflowExecution: WorkflowExecution;
}
