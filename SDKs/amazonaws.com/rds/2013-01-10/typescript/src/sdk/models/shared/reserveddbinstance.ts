import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecurringCharge } from "./recurringcharge";



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
  multiAz?: boolean;

  @SpeakeasyMetadata()
  offeringType?: string;

  @SpeakeasyMetadata()
  productDescription?: string;

  @SpeakeasyMetadata({ elemType: RecurringCharge })
  recurringCharges?: RecurringCharge[];

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
