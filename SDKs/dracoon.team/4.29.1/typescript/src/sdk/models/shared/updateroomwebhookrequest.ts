import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoomWebhookAssignment } from "./roomwebhookassignment";



// UpdateRoomWebhookRequest
/** 
 * Request model for handling webhook assignments
**/
export class UpdateRoomWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: RoomWebhookAssignment })
  items: RoomWebhookAssignment[];
}
