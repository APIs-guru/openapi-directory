import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RoomUsersAddBatchRequestItem } from "./roomusersaddbatchrequestitem";


// RoomUsersAddBatchRequest
/** 
 * Request model for granting user(s) to the room
**/
export class RoomUsersAddBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.RoomUsersAddBatchRequestItem })
  items: RoomUsersAddBatchRequestItem[];
}
