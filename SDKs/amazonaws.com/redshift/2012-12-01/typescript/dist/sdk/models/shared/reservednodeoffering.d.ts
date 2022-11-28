import { SpeakeasyBase } from "../../../internal/utils";
import { RecurringCharge } from "./recurringcharge";
import { ReservedNodeOfferingTypeEnum } from "./reservednodeofferingtypeenum";
/**
 * Describes a reserved node offering.
**/
export declare class ReservedNodeOffering extends SpeakeasyBase {
    currencyCode?: string;
    duration?: number;
    fixedPrice?: number;
    nodeType?: string;
    offeringType?: string;
    recurringCharges?: RecurringCharge[];
    reservedNodeOfferingId?: string;
    reservedNodeOfferingType?: ReservedNodeOfferingTypeEnum;
    usagePrice?: number;
}
