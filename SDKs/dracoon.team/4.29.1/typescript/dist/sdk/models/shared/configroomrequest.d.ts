import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConfigRoomRequestNewGroupMemberAcceptanceEnum {
    Autoallow = "autoallow",
    Pending = "pending"
}
/**
 * Request model for configuring a room
**/
export declare class ConfigRoomRequest extends SpeakeasyBase {
    adminGroupIds?: number[];
    adminIds?: number[];
    classification?: number;
    hasActivitiesLog?: boolean;
    hasRecycleBin?: boolean;
    inheritPermissions?: boolean;
    newGroupMemberAcceptance?: ConfigRoomRequestNewGroupMemberAcceptanceEnum;
    recycleBinRetentionPeriod?: number;
    takeOverPermissions?: boolean;
}
