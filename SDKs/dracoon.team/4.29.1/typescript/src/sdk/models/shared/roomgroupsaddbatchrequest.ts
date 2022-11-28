import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoomGroupsAddBatchRequestItem } from "./roomgroupsaddbatchrequestitem";



// RoomGroupsAddBatchRequest
/** 
 * Request model for granting group(s) to the room
**/
export class RoomGroupsAddBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: RoomGroupsAddBatchRequestItem })
  items: RoomGroupsAddBatchRequestItem[];
}
