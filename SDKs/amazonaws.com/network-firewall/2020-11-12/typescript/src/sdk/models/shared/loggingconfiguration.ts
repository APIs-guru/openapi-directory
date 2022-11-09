import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogDestinationConfig } from "./logdestinationconfig";


// LoggingConfiguration
/** 
 * Defines how AWS Network Firewall performs logging for a <a>Firewall</a>. 
**/
export class LoggingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=LogDestinationConfigs", elemType: shared.LogDestinationConfig })
  logDestinationConfigs: LogDestinationConfig[];
}
