import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Reservation
/** 
 * A reservation is a mechanism used to guarantee slots to users.
**/
export class Reservation extends SpeakeasyBase {
  @Metadata({ data: "json, name=concurrency" })
  concurrency?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=ignoreIdleSlots" })
  ignoreIdleSlots?: boolean;

  @Metadata({ data: "json, name=multiRegionAuxiliary" })
  multiRegionAuxiliary?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=slotCapacity" })
  slotCapacity?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
