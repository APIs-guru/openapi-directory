import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AgentVersion
/** 
 * Edge Manager agent version.
**/
export class AgentVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgentCount" })
  agentCount: number;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version: string;
}
