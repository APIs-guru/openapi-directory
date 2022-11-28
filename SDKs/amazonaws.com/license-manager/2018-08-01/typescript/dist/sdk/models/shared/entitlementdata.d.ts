import { SpeakeasyBase } from "../../../internal/utils";
import { EntitlementDataUnitEnum } from "./entitlementdataunitenum";
/**
 * Data associated with an entitlement resource.
**/
export declare class EntitlementData extends SpeakeasyBase {
    name: string;
    unit: EntitlementDataUnitEnum;
    value?: string;
}
