import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortRange } from "./portrange";
import { Address } from "./address";
import { TcpFlagField } from "./tcpflagfield";



// MatchAttributes
/** 
 * Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags. 
**/
export class MatchAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationPorts", elemType: PortRange })
  destinationPorts?: PortRange[];

  @SpeakeasyMetadata({ data: "json, name=Destinations", elemType: Address })
  destinations?: Address[];

  @SpeakeasyMetadata({ data: "json, name=Protocols" })
  protocols?: number[];

  @SpeakeasyMetadata({ data: "json, name=SourcePorts", elemType: PortRange })
  sourcePorts?: PortRange[];

  @SpeakeasyMetadata({ data: "json, name=Sources", elemType: Address })
  sources?: Address[];

  @SpeakeasyMetadata({ data: "json, name=TCPFlags", elemType: TcpFlagField })
  tcpFlags?: TcpFlagField[];
}
