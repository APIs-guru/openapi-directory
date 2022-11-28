import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentVersion } from "./agentversion";



// DescribeAgentVersionsResult
/** 
 * Contains the response to a <code>DescribeAgentVersions</code> request.
**/
export class DescribeAgentVersionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgentVersions", elemType: AgentVersion })
  agentVersions?: AgentVersion[];
}
