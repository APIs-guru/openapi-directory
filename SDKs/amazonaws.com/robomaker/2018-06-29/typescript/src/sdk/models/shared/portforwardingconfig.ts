import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortMapping } from "./portmapping";



// PortForwardingConfig
/** 
 * Configuration information for port forwarding.
**/
export class PortForwardingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portMappings", elemType: PortMapping })
  portMappings?: PortMapping[];
}
