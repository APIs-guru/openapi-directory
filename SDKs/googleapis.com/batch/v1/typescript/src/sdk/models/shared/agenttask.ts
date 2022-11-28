import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskSpec } from "./taskspec";
import { TaskStatus } from "./taskstatus";


export enum AgentTaskIntendedStateEnum {
    IntendedStateUnspecified = "INTENDED_STATE_UNSPECIFIED",
    Assigned = "ASSIGNED",
    Cancelled = "CANCELLED",
    Deleted = "DELETED"
}


// AgentTask
/** 
 * TODO(b/182501497) The message needs to be redefined when the Agent API server updates data in storage per the backend design.
**/
export class AgentTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intendedState" })
  intendedState?: AgentTaskIntendedStateEnum;

  @SpeakeasyMetadata({ data: "json, name=reachedBarrier" })
  reachedBarrier?: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: TaskSpec;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TaskStatus;

  @SpeakeasyMetadata({ data: "json, name=task" })
  task?: string;
}
