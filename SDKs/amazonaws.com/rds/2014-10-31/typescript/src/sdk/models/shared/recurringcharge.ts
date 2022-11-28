import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RecurringCharge
/** 
 *  This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>DescribeReservedDBInstancesOfferings</code> actions. 
**/
export class RecurringCharge extends SpeakeasyBase {
  @SpeakeasyMetadata()
  recurringChargeAmount?: number;

  @SpeakeasyMetadata()
  recurringChargeFrequency?: string;
}
