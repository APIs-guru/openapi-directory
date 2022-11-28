import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkProtocolEnum } from "./networkprotocolenum";
import { PortStateEnum } from "./portstateenum";



// InstancePortState
/** 
 * Describes open ports on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
**/
export class InstancePortState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cidrListAliases" })
  cidrListAliases?: string[];

  @SpeakeasyMetadata({ data: "json, name=cidrs" })
  cidrs?: string[];

  @SpeakeasyMetadata({ data: "json, name=fromPort" })
  fromPort?: number;

  @SpeakeasyMetadata({ data: "json, name=ipv6Cidrs" })
  ipv6Cidrs?: string[];

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: NetworkProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: PortStateEnum;

  @SpeakeasyMetadata({ data: "json, name=toPort" })
  toPort?: number;
}
