import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkProtocolEnum } from "./networkprotocolenum";
import { PortStateEnum } from "./portstateenum";
/**
 * Describes open ports on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
**/
export declare class InstancePortState extends SpeakeasyBase {
    cidrListAliases?: string[];
    cidrs?: string[];
    fromPort?: number;
    ipv6Cidrs?: string[];
    protocol?: NetworkProtocolEnum;
    state?: PortStateEnum;
    toPort?: number;
}
