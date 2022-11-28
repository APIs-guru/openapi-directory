import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogDestinationConfig } from "./logdestinationconfig";



// LoggingConfiguration
/** 
 * Defines how AWS Network Firewall performs logging for a <a>Firewall</a>. 
**/
export class LoggingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LogDestinationConfigs", elemType: LogDestinationConfig })
  logDestinationConfigs: LogDestinationConfig[];
}
