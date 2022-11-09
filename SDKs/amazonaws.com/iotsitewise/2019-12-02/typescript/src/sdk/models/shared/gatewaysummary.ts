import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GatewayCapabilitySummary } from "./gatewaycapabilitysummary";
import { GatewayPlatform } from "./gatewayplatform";


// GatewaySummary
/** 
 * Contains a summary of a gateway.
**/
export class GatewaySummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @Metadata({ data: "json, name=gatewayCapabilitySummaries", elemType: shared.GatewayCapabilitySummary })
  gatewayCapabilitySummaries?: GatewayCapabilitySummary[];

  @Metadata({ data: "json, name=gatewayId" })
  gatewayId: string;

  @Metadata({ data: "json, name=gatewayName" })
  gatewayName: string;

  @Metadata({ data: "json, name=gatewayPlatform" })
  gatewayPlatform?: GatewayPlatform;

  @Metadata({ data: "json, name=lastUpdateDate" })
  lastUpdateDate: Date;
}
