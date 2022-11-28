import { SpeakeasyBase } from "../../../internal/utils";
import { RecurringCharge } from "./recurringcharge";
/**
 *  This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>PurchaseReservedDBInstancesOffering</code> actions.
**/
export declare class ReservedDbInstance extends SpeakeasyBase {
    currencyCode?: string;
    dbInstanceClass?: string;
    dbInstanceCount?: number;
    duration?: number;
    fixedPrice?: number;
    leaseId?: string;
    multiAz?: boolean;
    offeringType?: string;
    productDescription?: string;
    recurringCharges?: RecurringCharge[];
    reservedDbInstanceArn?: string;
    reservedDbInstanceId?: string;
    reservedDbInstancesOfferingId?: string;
    startTime?: Date;
    state?: string;
    usagePrice?: number;
}
