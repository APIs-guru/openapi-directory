import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReservationInput
/** 
 * A reservation is a mechanism used to guarantee slots to users.
**/
export class ReservationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=concurrency" })
  concurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=ignoreIdleSlots" })
  ignoreIdleSlots?: boolean;

  @SpeakeasyMetadata({ data: "json, name=multiRegionAuxiliary" })
  multiRegionAuxiliary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=slotCapacity" })
  slotCapacity?: string;
}


// Reservation
/** 
 * A reservation is a mechanism used to guarantee slots to users.
**/
export class Reservation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=concurrency" })
  concurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=ignoreIdleSlots" })
  ignoreIdleSlots?: boolean;

  @SpeakeasyMetadata({ data: "json, name=multiRegionAuxiliary" })
  multiRegionAuxiliary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=slotCapacity" })
  slotCapacity?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
