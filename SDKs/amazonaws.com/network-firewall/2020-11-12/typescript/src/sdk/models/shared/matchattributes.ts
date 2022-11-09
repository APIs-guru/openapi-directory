import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PortRange } from "./portrange";
import { Address } from "./address";
import { PortRange } from "./portrange";
import { Address } from "./address";
import { TcpFlagField } from "./tcpflagfield";


// MatchAttributes
/** 
 * Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags. 
**/
export class MatchAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationPorts", elemType: shared.PortRange })
  destinationPorts?: PortRange[];

  @Metadata({ data: "json, name=Destinations", elemType: shared.Address })
  destinations?: Address[];

  @Metadata({ data: "json, name=Protocols" })
  protocols?: number[];

  @Metadata({ data: "json, name=SourcePorts", elemType: shared.PortRange })
  sourcePorts?: PortRange[];

  @Metadata({ data: "json, name=Sources", elemType: shared.Address })
  sources?: Address[];

  @Metadata({ data: "json, name=TCPFlags", elemType: shared.TcpFlagField })
  tcpFlags?: TcpFlagField[];
}
