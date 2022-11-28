import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessDirectionEnum } from "./accessdirectionenum";
import { PortAccessTypeEnum } from "./portaccesstypeenum";
import { NetworkProtocolEnum } from "./networkprotocolenum";



// InstancePortInfo
/** 
 * Describes information about ports for an Amazon Lightsail instance.
**/
export class InstancePortInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessDirection" })
  accessDirection?: AccessDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=accessFrom" })
  accessFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=accessType" })
  accessType?: PortAccessTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=cidrListAliases" })
  cidrListAliases?: string[];

  @SpeakeasyMetadata({ data: "json, name=cidrs" })
  cidrs?: string[];

  @SpeakeasyMetadata({ data: "json, name=commonName" })
  commonName?: string;

  @SpeakeasyMetadata({ data: "json, name=fromPort" })
  fromPort?: number;

  @SpeakeasyMetadata({ data: "json, name=ipv6Cidrs" })
  ipv6Cidrs?: string[];

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: NetworkProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=toPort" })
  toPort?: number;
}
