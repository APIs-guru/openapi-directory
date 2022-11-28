import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MessageNewJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Queued = "QUEUED",
    Scheduled = "SCHEDULED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    DeletionInProgress = "DELETION_IN_PROGRESS"
}
export declare enum MessageNewTaskStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Assigned = "ASSIGNED",
    Running = "RUNNING",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED"
}
export declare enum MessageTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    JobStateChanged = "JOB_STATE_CHANGED",
    TaskStateChanged = "TASK_STATE_CHANGED"
}
/**
 * Message details. Describe the attribute that a message should have. Without specified message attributes, no message will be sent by default.
**/
export declare class Message extends SpeakeasyBase {
    newJobState?: MessageNewJobStateEnum;
    newTaskState?: MessageNewTaskStateEnum;
    type?: MessageTypeEnum;
}
