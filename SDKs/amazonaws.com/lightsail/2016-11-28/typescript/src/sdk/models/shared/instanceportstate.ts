import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NetworkProtocolEnum } from "./networkprotocolenum";
import { PortStateEnum } from "./portstateenum";


// InstancePortState
/** 
 * Describes open ports on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
**/
export class InstancePortState extends SpeakeasyBase {
  @Metadata({ data: "json, name=cidrListAliases" })
  cidrListAliases?: string[];

  @Metadata({ data: "json, name=cidrs" })
  cidrs?: string[];

  @Metadata({ data: "json, name=fromPort" })
  fromPort?: number;

  @Metadata({ data: "json, name=ipv6Cidrs" })
  ipv6Cidrs?: string[];

  @Metadata({ data: "json, name=protocol" })
  protocol?: NetworkProtocolEnum;

  @Metadata({ data: "json, name=state" })
  state?: PortStateEnum;

  @Metadata({ data: "json, name=toPort" })
  toPort?: number;
}
