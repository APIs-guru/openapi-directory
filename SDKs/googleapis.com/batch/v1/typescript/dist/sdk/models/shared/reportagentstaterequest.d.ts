import { SpeakeasyBase } from "../../../internal/utils";
import { AgentInfo } from "./agentinfo";
import { AgentMetadata } from "./agentmetadata";
/**
 * Request to report agent's state. The Request itself implies the agent is healthy.
**/
export declare class ReportAgentStateRequest extends SpeakeasyBase {
    agentInfo?: AgentInfo;
    metadata?: AgentMetadata;
}
