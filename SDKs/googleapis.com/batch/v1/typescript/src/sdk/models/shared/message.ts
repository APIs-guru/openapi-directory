import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MessageNewJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Queued = "QUEUED",
    Scheduled = "SCHEDULED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    DeletionInProgress = "DELETION_IN_PROGRESS"
}

export enum MessageNewTaskStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Assigned = "ASSIGNED",
    Running = "RUNNING",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED"
}

export enum MessageTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    JobStateChanged = "JOB_STATE_CHANGED",
    TaskStateChanged = "TASK_STATE_CHANGED"
}


// Message
/** 
 * Message details. Describe the attribute that a message should have. Without specified message attributes, no message will be sent by default.
**/
export class Message extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newJobState" })
  newJobState?: MessageNewJobStateEnum;

  @SpeakeasyMetadata({ data: "json, name=newTaskState" })
  newTaskState?: MessageNewTaskStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MessageTypeEnum;
}
