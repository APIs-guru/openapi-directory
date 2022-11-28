import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StackConfigurationManager } from "./stackconfigurationmanager";



// AgentVersion
/** 
 * Describes an agent version.
**/
export class AgentVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationManager" })
  configurationManager?: StackConfigurationManager;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
