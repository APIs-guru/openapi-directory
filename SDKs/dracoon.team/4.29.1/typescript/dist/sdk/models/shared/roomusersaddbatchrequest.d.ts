import { SpeakeasyBase } from "../../../internal/utils";
import { RoomUsersAddBatchRequestItem } from "./roomusersaddbatchrequestitem";
/**
 * Request model for granting user(s) to the room
**/
export declare class RoomUsersAddBatchRequest extends SpeakeasyBase {
    items: RoomUsersAddBatchRequestItem[];
}
