import { SpeakeasyBase } from "../../../internal/utils";
import { EntitlementDataUnitEnum } from "./entitlementdataunitenum";
/**
 * Usage associated with an entitlement resource.
**/
export declare class EntitlementUsage extends SpeakeasyBase {
    consumedValue: string;
    maxCount?: string;
    name: string;
    unit: EntitlementDataUnitEnum;
}
