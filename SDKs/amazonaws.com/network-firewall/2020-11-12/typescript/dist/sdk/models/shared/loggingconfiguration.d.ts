import { SpeakeasyBase } from "../../../internal/utils";
import { LogDestinationConfig } from "./logdestinationconfig";
/**
 * Defines how AWS Network Firewall performs logging for a <a>Firewall</a>.
**/
export declare class LoggingConfiguration extends SpeakeasyBase {
    logDestinationConfigs: LogDestinationConfig[];
}
