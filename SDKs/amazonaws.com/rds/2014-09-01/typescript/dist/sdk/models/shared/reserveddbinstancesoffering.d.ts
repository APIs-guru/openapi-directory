import { SpeakeasyBase } from "../../../internal/utils";
import { RecurringCharge } from "./recurringcharge";
export declare class ReservedDbInstancesOffering extends SpeakeasyBase {
    currencyCode?: string;
    dbInstanceClass?: string;
    duration?: number;
    fixedPrice?: number;
    multiAz?: boolean;
    offeringType?: string;
    productDescription?: string;
    recurringCharges?: RecurringCharge[];
    reservedDbInstancesOfferingId?: string;
    usagePrice?: number;
}
