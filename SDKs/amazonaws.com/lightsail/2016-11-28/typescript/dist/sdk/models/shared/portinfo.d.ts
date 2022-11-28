import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkProtocolEnum } from "./networkprotocolenum";
/**
 * Describes ports to open on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
**/
export declare class PortInfo extends SpeakeasyBase {
    cidrListAliases?: string[];
    cidrs?: string[];
    fromPort?: number;
    ipv6Cidrs?: string[];
    protocol?: NetworkProtocolEnum;
    toPort?: number;
}
