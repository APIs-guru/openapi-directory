import { SpeakeasyBase } from "../../../internal/utils";
import { CapabilitySyncStatusEnum } from "./capabilitysyncstatusenum";
/**
 * Contains a summary of a gateway capability configuration.
**/
export declare class GatewayCapabilitySummary extends SpeakeasyBase {
    capabilityNamespace: string;
    capabilitySyncStatus: CapabilitySyncStatusEnum;
}
