import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentInfo } from "./agentinfo";
import { AgentMetadata } from "./agentmetadata";



// ReportAgentStateRequest
/** 
 * Request to report agent's state. The Request itself implies the agent is healthy.
**/
export class ReportAgentStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentInfo" })
  agentInfo?: AgentInfo;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: AgentMetadata;
}
