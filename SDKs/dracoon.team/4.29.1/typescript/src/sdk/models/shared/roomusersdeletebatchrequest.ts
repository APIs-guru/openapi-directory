import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RoomUsersDeleteBatchRequest
/** 
 * Request model for revoking user(s) from the room
**/
export class RoomUsersDeleteBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids: number[];
}
