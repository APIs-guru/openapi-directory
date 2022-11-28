import { SpeakeasyBase } from "../../../internal/utils";
import { PortRange } from "./portrange";
import { Address } from "./address";
import { TcpFlagField } from "./tcpflagfield";
/**
 * Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags.
**/
export declare class MatchAttributes extends SpeakeasyBase {
    destinationPorts?: PortRange[];
    destinations?: Address[];
    protocols?: number[];
    sourcePorts?: PortRange[];
    sources?: Address[];
    tcpFlags?: TcpFlagField[];
}
