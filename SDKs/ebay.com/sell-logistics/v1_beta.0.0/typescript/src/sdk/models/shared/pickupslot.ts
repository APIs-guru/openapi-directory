import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PickupSlot
/** 
 * This complex type defines a time window for the pickup of a package.
**/
export class PickupSlot extends SpeakeasyBase {
  @Metadata({ data: "json, name=pickupSlotEndTime" })
  pickupSlotEndTime?: string;

  @Metadata({ data: "json, name=pickupSlotId" })
  pickupSlotId?: string;

  @Metadata({ data: "json, name=pickupSlotStartTime" })
  pickupSlotStartTime?: string;

  @Metadata({ data: "json, name=pickupSlotTimeZone" })
  pickupSlotTimeZone?: string;
}
