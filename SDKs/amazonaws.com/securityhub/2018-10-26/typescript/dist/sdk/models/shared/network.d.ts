import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkDirectionEnum } from "./networkdirectionenum";
import { PortRange } from "./portrange";
/**
 * The details of network-related information about a finding.
**/
export declare class Network extends SpeakeasyBase {
    destinationDomain?: string;
    destinationIpV4?: string;
    destinationIpV6?: string;
    destinationPort?: number;
    direction?: NetworkDirectionEnum;
    openPortRange?: PortRange;
    protocol?: string;
    sourceDomain?: string;
    sourceIpV4?: string;
    sourceIpV6?: string;
    sourceMac?: string;
    sourcePort?: number;
}
