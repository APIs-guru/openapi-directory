import { SpeakeasyBase } from "../../../internal/utils";
import { RoomWebhookAssignment } from "./roomwebhookassignment";
/**
 * Request model for handling webhook assignments
**/
export declare class UpdateRoomWebhookRequest extends SpeakeasyBase {
    items: RoomWebhookAssignment[];
}
