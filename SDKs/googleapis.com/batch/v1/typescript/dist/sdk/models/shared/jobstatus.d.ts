import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEvent } from "./statusevent";
import { TaskGroupStatus } from "./taskgroupstatus";
export declare enum JobStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Queued = "QUEUED",
    Scheduled = "SCHEDULED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    DeletionInProgress = "DELETION_IN_PROGRESS"
}
/**
 * Job status.
**/
export declare class JobStatus extends SpeakeasyBase {
    runDuration?: string;
    state?: JobStatusStateEnum;
    statusEvents?: StatusEvent[];
    taskGroups?: Map<string, TaskGroupStatus>;
}
