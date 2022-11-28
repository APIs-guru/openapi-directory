import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecurringCharge } from "./recurringcharge";
import { ReservedNodeOfferingTypeEnum } from "./reservednodeofferingtypeenum";



// ReservedNode
/** 
 * Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. 
**/
export class ReservedNode extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currencyCode?: string;

  @SpeakeasyMetadata()
  duration?: number;

  @SpeakeasyMetadata()
  fixedPrice?: number;

  @SpeakeasyMetadata()
  nodeCount?: number;

  @SpeakeasyMetadata()
  nodeType?: string;

  @SpeakeasyMetadata()
  offeringType?: string;

  @SpeakeasyMetadata({ elemType: RecurringCharge })
  recurringCharges?: RecurringCharge[];

  @SpeakeasyMetadata()
  reservedNodeId?: string;

  @SpeakeasyMetadata()
  reservedNodeOfferingId?: string;

  @SpeakeasyMetadata()
  reservedNodeOfferingType?: ReservedNodeOfferingTypeEnum;

  @SpeakeasyMetadata()
  startTime?: Date;

  @SpeakeasyMetadata()
  state?: string;

  @SpeakeasyMetadata()
  usagePrice?: number;
}
