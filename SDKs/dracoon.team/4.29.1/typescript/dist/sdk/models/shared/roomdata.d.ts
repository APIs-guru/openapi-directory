import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
import { NodePermissions } from "./nodepermissions";
export declare enum RoomDataTypeEnum {
    Room = "room"
}
/**
 * Room information
**/
export declare class RoomData extends SpeakeasyBase {
    children?: RoomData[];
    cntAdmins?: number;
    cntDownloadShares?: number;
    cntUploadShares?: number;
    cntUsers?: number;
    createdAt?: Date;
    createdBy?: UserInfo;
    hasRecycleBin: boolean;
    id: number;
    isEncrypted: boolean;
    isFavorite?: boolean;
    isGranted: boolean;
    name: string;
    parentId?: number;
    permissions?: NodePermissions;
    quota?: number;
    recycleBinRetentionPeriod: number;
    size?: number;
    type?: RoomDataTypeEnum;
    updatedAt?: Date;
    updatedBy?: UserInfo;
}
