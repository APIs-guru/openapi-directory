import { SpeakeasyBase } from "../../../internal/utils";
import { PortMapping } from "./portmapping";
/**
 * Configuration information for port forwarding.
**/
export declare class PortForwardingConfig extends SpeakeasyBase {
    portMappings?: PortMapping[];
}
