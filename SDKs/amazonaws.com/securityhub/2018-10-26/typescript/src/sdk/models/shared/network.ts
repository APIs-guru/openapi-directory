import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkDirectionEnum } from "./networkdirectionenum";
import { PortRange } from "./portrange";



// Network
/** 
 * The details of network-related information about a finding.
**/
export class Network extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationDomain" })
  destinationDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationIpV4" })
  destinationIpV4?: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationIpV6" })
  destinationIpV6?: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationPort" })
  destinationPort?: number;

  @SpeakeasyMetadata({ data: "json, name=Direction" })
  direction?: NetworkDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=OpenPortRange" })
  openPortRange?: PortRange;

  @SpeakeasyMetadata({ data: "json, name=Protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceDomain" })
  sourceDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceIpV4" })
  sourceIpV4?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceIpV6" })
  sourceIpV6?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceMac" })
  sourceMac?: string;

  @SpeakeasyMetadata({ data: "json, name=SourcePort" })
  sourcePort?: number;
}
