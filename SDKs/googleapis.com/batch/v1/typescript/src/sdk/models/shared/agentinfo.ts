import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentTaskInfo } from "./agenttaskinfo";


export enum AgentInfoStateEnum {
    AgentStateUnspecified = "AGENT_STATE_UNSPECIFIED",
    AgentStarting = "AGENT_STARTING",
    AgentRunning = "AGENT_RUNNING",
    AgentStopped = "AGENT_STOPPED"
}


// AgentInfo
/** 
 * VM Agent Info.
**/
export class AgentInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=reportTime" })
  reportTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: AgentInfoStateEnum;

  @SpeakeasyMetadata({ data: "json, name=taskGroupId" })
  taskGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=tasks", elemType: AgentTaskInfo })
  tasks?: AgentTaskInfo[];
}
