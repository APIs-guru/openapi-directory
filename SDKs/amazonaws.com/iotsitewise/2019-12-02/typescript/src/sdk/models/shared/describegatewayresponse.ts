import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GatewayCapabilitySummary } from "./gatewaycapabilitysummary";
import { GatewayPlatform } from "./gatewayplatform";



export class DescribeGatewayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=gatewayArn" })
  gatewayArn: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayCapabilitySummaries", elemType: GatewayCapabilitySummary })
  gatewayCapabilitySummaries: GatewayCapabilitySummary[];

  @SpeakeasyMetadata({ data: "json, name=gatewayId" })
  gatewayId: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayName" })
  gatewayName: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayPlatform" })
  gatewayPlatform?: GatewayPlatform;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateDate" })
  lastUpdateDate: Date;
}
