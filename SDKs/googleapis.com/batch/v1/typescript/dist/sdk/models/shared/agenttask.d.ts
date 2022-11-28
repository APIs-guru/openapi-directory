import { SpeakeasyBase } from "../../../internal/utils";
import { TaskSpec } from "./taskspec";
import { TaskStatus } from "./taskstatus";
export declare enum AgentTaskIntendedStateEnum {
    IntendedStateUnspecified = "INTENDED_STATE_UNSPECIFIED",
    Assigned = "ASSIGNED",
    Cancelled = "CANCELLED",
    Deleted = "DELETED"
}
/**
 * TODO(b/182501497) The message needs to be redefined when the Agent API server updates data in storage per the backend design.
**/
export declare class AgentTask extends SpeakeasyBase {
    intendedState?: AgentTaskIntendedStateEnum;
    reachedBarrier?: string;
    spec?: TaskSpec;
    status?: TaskStatus;
    task?: string;
}
