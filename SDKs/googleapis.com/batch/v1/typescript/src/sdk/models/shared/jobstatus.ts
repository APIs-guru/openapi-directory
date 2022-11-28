import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusEvent } from "./statusevent";
import { TaskGroupStatus } from "./taskgroupstatus";


export enum JobStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Queued = "QUEUED",
    Scheduled = "SCHEDULED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    DeletionInProgress = "DELETION_IN_PROGRESS"
}


// JobStatus
/** 
 * Job status.
**/
export class JobStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=runDuration" })
  runDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: JobStatusStateEnum;

  @SpeakeasyMetadata({ data: "json, name=statusEvents", elemType: StatusEvent })
  statusEvents?: StatusEvent[];

  @SpeakeasyMetadata({ data: "json, name=taskGroups", elemType: TaskGroupStatus })
  taskGroups?: Map<string, TaskGroupStatus>;
}
