import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessDirectionEnum } from "./accessdirectionenum";
import { PortAccessTypeEnum } from "./portaccesstypeenum";
import { NetworkProtocolEnum } from "./networkprotocolenum";


// InstancePortInfo
/** 
 * Describes information about ports for an Amazon Lightsail instance.
**/
export class InstancePortInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessDirection" })
  accessDirection?: AccessDirectionEnum;

  @Metadata({ data: "json, name=accessFrom" })
  accessFrom?: string;

  @Metadata({ data: "json, name=accessType" })
  accessType?: PortAccessTypeEnum;

  @Metadata({ data: "json, name=cidrListAliases" })
  cidrListAliases?: string[];

  @Metadata({ data: "json, name=cidrs" })
  cidrs?: string[];

  @Metadata({ data: "json, name=commonName" })
  commonName?: string;

  @Metadata({ data: "json, name=fromPort" })
  fromPort?: number;

  @Metadata({ data: "json, name=ipv6Cidrs" })
  ipv6Cidrs?: string[];

  @Metadata({ data: "json, name=protocol" })
  protocol?: NetworkProtocolEnum;

  @Metadata({ data: "json, name=toPort" })
  toPort?: number;
}
