import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RoomWebhookAssignment } from "./roomwebhookassignment";


// UpdateRoomWebhookRequest
/** 
 * Request model for handling webhook assignments
**/
export class UpdateRoomWebhookRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.RoomWebhookAssignment })
  items: RoomWebhookAssignment[];
}
