import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>DescribeReservedDBInstancesOfferings</code> actions.
**/
export declare class RecurringCharge extends SpeakeasyBase {
    recurringChargeAmount?: number;
    recurringChargeFrequency?: string;
}
