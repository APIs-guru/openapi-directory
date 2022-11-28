import { SpeakeasyBase } from "../../../internal/utils";
import { EntitlementUnitEnum } from "./entitlementunitenum";
/**
 * Describes a resource entitled for use with a license.
**/
export declare class Entitlement extends SpeakeasyBase {
    allowCheckIn?: boolean;
    maxCount?: number;
    name: string;
    overage?: boolean;
    unit: EntitlementUnitEnum;
    value?: string;
}
