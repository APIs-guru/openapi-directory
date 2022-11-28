import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RoomUsersDeleteBatchRequest
/** 
 * Request model for revoking user(s) from the room
**/
export class RoomUsersDeleteBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: number[];
}
