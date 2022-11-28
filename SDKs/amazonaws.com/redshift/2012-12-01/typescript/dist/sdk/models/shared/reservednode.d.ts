import { SpeakeasyBase } from "../../../internal/utils";
import { RecurringCharge } from "./recurringcharge";
import { ReservedNodeOfferingTypeEnum } from "./reservednodeofferingtypeenum";
/**
 * Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings.
**/
export declare class ReservedNode extends SpeakeasyBase {
    currencyCode?: string;
    duration?: number;
    fixedPrice?: number;
    nodeCount?: number;
    nodeType?: string;
    offeringType?: string;
    recurringCharges?: RecurringCharge[];
    reservedNodeId?: string;
    reservedNodeOfferingId?: string;
    reservedNodeOfferingType?: ReservedNodeOfferingTypeEnum;
    startTime?: Date;
    state?: string;
    usagePrice?: number;
}
