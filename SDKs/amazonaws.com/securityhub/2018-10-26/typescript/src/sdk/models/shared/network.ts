import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NetworkDirectionEnum } from "./networkdirectionenum";
import { PortRange } from "./portrange";


// Network
/** 
 * The details of network-related information about a finding.
**/
export class Network extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationDomain" })
  destinationDomain?: string;

  @Metadata({ data: "json, name=DestinationIpV4" })
  destinationIpV4?: string;

  @Metadata({ data: "json, name=DestinationIpV6" })
  destinationIpV6?: string;

  @Metadata({ data: "json, name=DestinationPort" })
  destinationPort?: number;

  @Metadata({ data: "json, name=Direction" })
  direction?: NetworkDirectionEnum;

  @Metadata({ data: "json, name=OpenPortRange" })
  openPortRange?: PortRange;

  @Metadata({ data: "json, name=Protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=SourceDomain" })
  sourceDomain?: string;

  @Metadata({ data: "json, name=SourceIpV4" })
  sourceIpV4?: string;

  @Metadata({ data: "json, name=SourceIpV6" })
  sourceIpV6?: string;

  @Metadata({ data: "json, name=SourceMac" })
  sourceMac?: string;

  @Metadata({ data: "json, name=SourcePort" })
  sourcePort?: number;
}
