import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
import { EncryptionInfo } from "./encryptioninfo";
import { NodePermissions } from "./nodepermissions";
export declare enum NodeTypeEnum {
    Room = "room",
    Folder = "folder",
    File = "file"
}
/**
 * Node information (Node can be a room, folder or file)
**/
export declare class Node extends SpeakeasyBase {
    authParentId?: number;
    branchVersion?: number;
    children?: Node[];
    classification?: number;
    cntAdmins?: number;
    cntChildren?: number;
    cntComments?: number;
    cntDeletedVersions?: number;
    cntDownloadShares?: number;
    cntFiles?: number;
    cntFolders?: number;
    cntRooms?: number;
    cntUploadShares?: number;
    cntUsers?: number;
    createdAt?: Date;
    createdBy?: UserInfo;
    encryptionInfo?: EncryptionInfo;
    expireAt?: Date;
    fileType?: string;
    hasActivitiesLog?: boolean;
    hasRecycleBin?: boolean;
    hash?: string;
    id: number;
    inheritPermissions?: boolean;
    isBrowsable?: boolean;
    isEncrypted?: boolean;
    isFavorite?: boolean;
    mediaToken?: string;
    mediaType?: string;
    name: string;
    notes?: string;
    parentId?: number;
    parentPath?: string;
    permissions?: NodePermissions;
    quota?: number;
    recycleBinRetentionPeriod?: number;
    size?: number;
    timestampCreation?: Date;
    timestampModification?: Date;
    type: NodeTypeEnum;
    updatedAt?: Date;
    updatedBy?: UserInfo;
}
