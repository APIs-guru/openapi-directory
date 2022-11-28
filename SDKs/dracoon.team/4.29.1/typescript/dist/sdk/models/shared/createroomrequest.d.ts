import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateRoomRequestNewGroupMemberAcceptanceEnum {
    Autoallow = "autoallow",
    Pending = "pending"
}
/**
 * Request model for creating a room
**/
export declare class CreateRoomRequest extends SpeakeasyBase {
    adminGroupIds?: number[];
    adminIds?: number[];
    classification?: number;
    hasActivitiesLog?: boolean;
    hasRecycleBin?: boolean;
    inheritPermissions?: boolean;
    name: string;
    newGroupMemberAcceptance?: CreateRoomRequestNewGroupMemberAcceptanceEnum;
    notes?: string;
    parentId?: number;
    quota?: number;
    recycleBinRetentionPeriod?: number;
    timestampCreation?: Date;
    timestampModification?: Date;
}
