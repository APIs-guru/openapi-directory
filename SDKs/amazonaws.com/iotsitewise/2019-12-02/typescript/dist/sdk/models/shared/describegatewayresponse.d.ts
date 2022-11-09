import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GatewayCapabilitySummary } from "./gatewaycapabilitysummary";
import { GatewayPlatform } from "./gatewayplatform";
export declare class DescribeGatewayResponse extends SpeakeasyBase {
    creationDate: Date;
    gatewayArn: string;
    gatewayCapabilitySummaries: GatewayCapabilitySummary[];
    gatewayId: string;
    gatewayName: string;
    gatewayPlatform?: GatewayPlatform;
    lastUpdateDate: Date;
}
