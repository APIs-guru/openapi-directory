import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AgentVersion
/** 
 * Edge Manager agent version.
**/
export class AgentVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgentCount" })
  agentCount: number;

  @Metadata({ data: "json, name=Version" })
  version: string;
}
