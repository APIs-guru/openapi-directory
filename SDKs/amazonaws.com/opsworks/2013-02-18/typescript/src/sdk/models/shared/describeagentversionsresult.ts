import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AgentVersion } from "./agentversion";


// DescribeAgentVersionsResult
/** 
 * Contains the response to a <code>DescribeAgentVersions</code> request.
**/
export class DescribeAgentVersionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgentVersions", elemType: shared.AgentVersion })
  agentVersions?: AgentVersion[];
}
