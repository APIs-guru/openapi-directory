import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentTask } from "./agenttask";



// ReportAgentStateResponse
/** 
 * Response to ReportAgentStateRequest.
**/
export class ReportAgentStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tasks", elemType: AgentTask })
  tasks?: AgentTask[];
}
