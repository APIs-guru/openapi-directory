import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RoomGroupsDeleteBatchRequest
/** 
 * Request model for revoking group(s) from the room
**/
export class RoomGroupsDeleteBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids: number[];
}
