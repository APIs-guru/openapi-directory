import { SpeakeasyBase } from "../../../internal/utils";
import { NodePermissions } from "./nodepermissions";
/**
 * Request item model for granting user to the room
**/
export declare class RoomUsersAddBatchRequestItem extends SpeakeasyBase {
    id: number;
    permissions: NodePermissions;
}
