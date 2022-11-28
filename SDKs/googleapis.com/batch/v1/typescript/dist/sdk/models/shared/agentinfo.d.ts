import { SpeakeasyBase } from "../../../internal/utils";
import { AgentTaskInfo } from "./agenttaskinfo";
export declare enum AgentInfoStateEnum {
    AgentStateUnspecified = "AGENT_STATE_UNSPECIFIED",
    AgentStarting = "AGENT_STARTING",
    AgentRunning = "AGENT_RUNNING",
    AgentStopped = "AGENT_STOPPED"
}
/**
 * VM Agent Info.
**/
export declare class AgentInfo extends SpeakeasyBase {
    jobId?: string;
    reportTime?: string;
    state?: AgentInfoStateEnum;
    taskGroupId?: string;
    tasks?: AgentTaskInfo[];
}
