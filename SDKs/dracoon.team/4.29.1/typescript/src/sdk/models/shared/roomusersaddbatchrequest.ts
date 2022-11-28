import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoomUsersAddBatchRequestItem } from "./roomusersaddbatchrequestitem";



// RoomUsersAddBatchRequest
/** 
 * Request model for granting user(s) to the room
**/
export class RoomUsersAddBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: RoomUsersAddBatchRequestItem })
  items: RoomUsersAddBatchRequestItem[];
}
