import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusEvent } from "./statusevent";


export enum TaskStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Assigned = "ASSIGNED",
    Running = "RUNNING",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED"
}


// TaskStatus
/** 
 * Status of a task
**/
export class TaskStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: TaskStatusStateEnum;

  @SpeakeasyMetadata({ data: "json, name=statusEvents", elemType: StatusEvent })
  statusEvents?: StatusEvent[];
}
