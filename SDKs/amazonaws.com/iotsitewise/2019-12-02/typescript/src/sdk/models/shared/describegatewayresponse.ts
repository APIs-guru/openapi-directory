import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GatewayCapabilitySummary } from "./gatewaycapabilitysummary";
import { GatewayPlatform } from "./gatewayplatform";


export class DescribeGatewayResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @Metadata({ data: "json, name=gatewayArn" })
  gatewayArn: string;

  @Metadata({ data: "json, name=gatewayCapabilitySummaries", elemType: shared.GatewayCapabilitySummary })
  gatewayCapabilitySummaries: GatewayCapabilitySummary[];

  @Metadata({ data: "json, name=gatewayId" })
  gatewayId: string;

  @Metadata({ data: "json, name=gatewayName" })
  gatewayName: string;

  @Metadata({ data: "json, name=gatewayPlatform" })
  gatewayPlatform?: GatewayPlatform;

  @Metadata({ data: "json, name=lastUpdateDate" })
  lastUpdateDate: Date;
}
