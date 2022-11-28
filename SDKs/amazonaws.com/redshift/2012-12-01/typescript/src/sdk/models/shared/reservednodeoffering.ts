import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecurringCharge } from "./recurringcharge";
import { ReservedNodeOfferingTypeEnum } from "./reservednodeofferingtypeenum";



// ReservedNodeOffering
/** 
 * Describes a reserved node offering.
**/
export class ReservedNodeOffering extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currencyCode?: string;

  @SpeakeasyMetadata()
  duration?: number;

  @SpeakeasyMetadata()
  fixedPrice?: number;

  @SpeakeasyMetadata()
  nodeType?: string;

  @SpeakeasyMetadata()
  offeringType?: string;

  @SpeakeasyMetadata({ elemType: RecurringCharge })
  recurringCharges?: RecurringCharge[];

  @SpeakeasyMetadata()
  reservedNodeOfferingId?: string;

  @SpeakeasyMetadata()
  reservedNodeOfferingType?: ReservedNodeOfferingTypeEnum;

  @SpeakeasyMetadata()
  usagePrice?: number;
}
