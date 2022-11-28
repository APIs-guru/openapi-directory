import { SpeakeasyBase } from "../../../internal/utils";
import { NodePermissions } from "./nodepermissions";
export declare enum RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum {
    Autoallow = "autoallow",
    Pending = "pending"
}
/**
 * Request item model for granting group to the room
**/
export declare class RoomGroupsAddBatchRequestItem extends SpeakeasyBase {
    id: number;
    newGroupMemberAcceptance?: RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum;
    permissions: NodePermissions;
}
