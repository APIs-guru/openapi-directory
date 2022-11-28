import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecurringCharge } from "./recurringcharge";



// ReservedDbInstance
/** 
 *  This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>PurchaseReservedDBInstancesOffering</code> actions. 
**/
export class ReservedDbInstance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currencyCode?: string;

  @SpeakeasyMetadata()
  dbInstanceClass?: string;

  @SpeakeasyMetadata()
  dbInstanceCount?: number;

  @SpeakeasyMetadata()
  duration?: number;

  @SpeakeasyMetadata()
  fixedPrice?: number;

  @SpeakeasyMetadata()
  leaseId?: string;

  @SpeakeasyMetadata()
  multiAz?: boolean;

  @SpeakeasyMetadata()
  offeringType?: string;

  @SpeakeasyMetadata()
  productDescription?: string;

  @SpeakeasyMetadata({ elemType: RecurringCharge })
  recurringCharges?: RecurringCharge[];

  @SpeakeasyMetadata()
  reservedDbInstanceArn?: string;

  @SpeakeasyMetadata()
  reservedDbInstanceId?: string;

  @SpeakeasyMetadata()
  reservedDbInstancesOfferingId?: string;

  @SpeakeasyMetadata()
  startTime?: Date;

  @SpeakeasyMetadata()
  state?: string;

  @SpeakeasyMetadata()
  usagePrice?: number;
}
