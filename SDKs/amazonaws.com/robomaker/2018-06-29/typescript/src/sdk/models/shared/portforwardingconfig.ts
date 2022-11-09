import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PortMapping } from "./portmapping";


// PortForwardingConfig
/** 
 * Configuration information for port forwarding.
**/
export class PortForwardingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=portMappings", elemType: shared.PortMapping })
  portMappings?: PortMapping[];
}
