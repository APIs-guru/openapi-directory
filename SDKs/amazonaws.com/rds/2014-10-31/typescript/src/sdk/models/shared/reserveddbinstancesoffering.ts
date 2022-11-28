import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecurringCharge } from "./recurringcharge";



// ReservedDbInstancesOffering
/** 
 *  This data type is used as a response element in the <code>DescribeReservedDBInstancesOfferings</code> action. 
**/
export class ReservedDbInstancesOffering extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currencyCode?: string;

  @SpeakeasyMetadata()
  dbInstanceClass?: string;

  @SpeakeasyMetadata()
  duration?: number;

  @SpeakeasyMetadata()
  fixedPrice?: number;

  @SpeakeasyMetadata()
  multiAz?: boolean;

  @SpeakeasyMetadata()
  offeringType?: string;

  @SpeakeasyMetadata()
  productDescription?: string;

  @SpeakeasyMetadata({ elemType: RecurringCharge })
  recurringCharges?: RecurringCharge[];

  @SpeakeasyMetadata()
  reservedDbInstancesOfferingId?: string;

  @SpeakeasyMetadata()
  usagePrice?: number;
}
