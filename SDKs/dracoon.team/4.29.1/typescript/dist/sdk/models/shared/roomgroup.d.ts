import { SpeakeasyBase } from "../../../internal/utils";
import { NodePermissions } from "./nodepermissions";
export declare enum RoomGroupNewGroupMemberAcceptanceEnum {
    Autoallow = "autoallow",
    Pending = "pending"
}
/**
 * Group information
**/
export declare class RoomGroup extends SpeakeasyBase {
    id: number;
    isGranted: boolean;
    name: string;
    newGroupMemberAcceptance?: RoomGroupNewGroupMemberAcceptanceEnum;
    permissions?: NodePermissions;
}
