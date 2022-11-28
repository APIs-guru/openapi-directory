import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PickupSlot
/** 
 * This complex type defines a time window for the pickup of a package.
**/
export class PickupSlot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pickupSlotEndTime" })
  pickupSlotEndTime?: string;

  @SpeakeasyMetadata({ data: "json, name=pickupSlotId" })
  pickupSlotId?: string;

  @SpeakeasyMetadata({ data: "json, name=pickupSlotStartTime" })
  pickupSlotStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=pickupSlotTimeZone" })
  pickupSlotTimeZone?: string;
}
