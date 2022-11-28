import { SpeakeasyBase } from "../../../internal/utils";
import { RecurringCharge } from "./recurringcharge";
export declare class ReservedDbInstance extends SpeakeasyBase {
    currencyCode?: string;
    dbInstanceClass?: string;
    dbInstanceCount?: number;
    duration?: number;
    fixedPrice?: number;
    multiAz?: boolean;
    offeringType?: string;
    productDescription?: string;
    recurringCharges?: RecurringCharge[];
    reservedDbInstanceId?: string;
    reservedDbInstancesOfferingId?: string;
    startTime?: Date;
    state?: string;
    usagePrice?: number;
}
