import { SpeakeasyBase } from "../../../internal/utils";
import { AgentTask } from "./agenttask";
/**
 * Response to ReportAgentStateRequest.
**/
export declare class ReportAgentStateResponse extends SpeakeasyBase {
    tasks?: AgentTask[];
}
