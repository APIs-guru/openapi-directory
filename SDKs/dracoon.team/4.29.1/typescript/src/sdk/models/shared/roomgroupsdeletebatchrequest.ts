import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RoomGroupsDeleteBatchRequest
/** 
 * Request model for revoking group(s) from the room
**/
export class RoomGroupsDeleteBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: number[];
}
