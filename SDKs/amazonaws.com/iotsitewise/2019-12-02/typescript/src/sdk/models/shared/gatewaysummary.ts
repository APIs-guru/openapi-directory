import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GatewayCapabilitySummary } from "./gatewaycapabilitysummary";
import { GatewayPlatform } from "./gatewayplatform";



// GatewaySummary
/** 
 * Contains a summary of a gateway.
**/
export class GatewaySummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=gatewayCapabilitySummaries", elemType: GatewayCapabilitySummary })
  gatewayCapabilitySummaries?: GatewayCapabilitySummary[];

  @SpeakeasyMetadata({ data: "json, name=gatewayId" })
  gatewayId: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayName" })
  gatewayName: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayPlatform" })
  gatewayPlatform?: GatewayPlatform;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateDate" })
  lastUpdateDate: Date;
}
