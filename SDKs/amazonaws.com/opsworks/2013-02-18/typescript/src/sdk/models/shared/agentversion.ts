import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StackConfigurationManager } from "./stackconfigurationmanager";


// AgentVersion
/** 
 * Describes an agent version.
**/
export class AgentVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationManager" })
  configurationManager?: StackConfigurationManager;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
