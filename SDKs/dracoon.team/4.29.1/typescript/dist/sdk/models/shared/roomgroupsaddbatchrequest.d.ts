import { SpeakeasyBase } from "../../../internal/utils";
import { RoomGroupsAddBatchRequestItem } from "./roomgroupsaddbatchrequestitem";
/**
 * Request model for granting group(s) to the room
**/
export declare class RoomGroupsAddBatchRequest extends SpeakeasyBase {
    items: RoomGroupsAddBatchRequestItem[];
}
