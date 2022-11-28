import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedDbInstancesOffering } from "./reserveddbinstancesoffering";
/**
 *  Contains the result of a successful invocation of the <code>DescribeReservedDBInstancesOfferings</code> action.
**/
export declare class ReservedDbInstancesOfferingMessage extends SpeakeasyBase {
    marker?: string;
    reservedDbInstancesOfferings?: ReservedDbInstancesOffering[];
}
