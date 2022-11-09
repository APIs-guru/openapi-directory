import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RoomGroupsAddBatchRequestItem } from "./roomgroupsaddbatchrequestitem";


// RoomGroupsAddBatchRequest
/** 
 * Request model for granting group(s) to the room
**/
export class RoomGroupsAddBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.RoomGroupsAddBatchRequestItem })
  items: RoomGroupsAddBatchRequestItem[];
}
