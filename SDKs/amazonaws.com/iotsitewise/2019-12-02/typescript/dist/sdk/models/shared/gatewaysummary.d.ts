import { SpeakeasyBase } from "../../../internal/utils";
import { GatewayCapabilitySummary } from "./gatewaycapabilitysummary";
import { GatewayPlatform } from "./gatewayplatform";
/**
 * Contains a summary of a gateway.
**/
export declare class GatewaySummary extends SpeakeasyBase {
    creationDate: Date;
    gatewayCapabilitySummaries?: GatewayCapabilitySummary[];
    gatewayId: string;
    gatewayName: string;
    gatewayPlatform?: GatewayPlatform;
    lastUpdateDate: Date;
}
