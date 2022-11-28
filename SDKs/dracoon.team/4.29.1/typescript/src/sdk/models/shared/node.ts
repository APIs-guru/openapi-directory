import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
import { EncryptionInfo } from "./encryptioninfo";
import { NodePermissions } from "./nodepermissions";


export enum NodeTypeEnum {
    Room = "room",
    Folder = "folder",
    File = "file"
}


// Node
/** 
 * Node information (Node can be a room, folder or file)
**/
export class Node extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authParentId" })
  authParentId?: number;

  @SpeakeasyMetadata({ data: "json, name=branchVersion" })
  branchVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=children", elemType: Node })
  children?: Node[];

  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: number;

  @SpeakeasyMetadata({ data: "json, name=cntAdmins" })
  cntAdmins?: number;

  @SpeakeasyMetadata({ data: "json, name=cntChildren" })
  cntChildren?: number;

  @SpeakeasyMetadata({ data: "json, name=cntComments" })
  cntComments?: number;

  @SpeakeasyMetadata({ data: "json, name=cntDeletedVersions" })
  cntDeletedVersions?: number;

  @SpeakeasyMetadata({ data: "json, name=cntDownloadShares" })
  cntDownloadShares?: number;

  @SpeakeasyMetadata({ data: "json, name=cntFiles" })
  cntFiles?: number;

  @SpeakeasyMetadata({ data: "json, name=cntFolders" })
  cntFolders?: number;

  @SpeakeasyMetadata({ data: "json, name=cntRooms" })
  cntRooms?: number;

  @SpeakeasyMetadata({ data: "json, name=cntUploadShares" })
  cntUploadShares?: number;

  @SpeakeasyMetadata({ data: "json, name=cntUsers" })
  cntUsers?: number;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: UserInfo;

  @SpeakeasyMetadata({ data: "json, name=encryptionInfo" })
  encryptionInfo?: EncryptionInfo;

  @SpeakeasyMetadata({ data: "json, name=expireAt" })
  expireAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=fileType" })
  fileType?: string;

  @SpeakeasyMetadata({ data: "json, name=hasActivitiesLog" })
  hasActivitiesLog?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasRecycleBin" })
  hasRecycleBin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hash" })
  hash?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=inheritPermissions" })
  inheritPermissions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isBrowsable" })
  isBrowsable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isEncrypted" })
  isEncrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isFavorite" })
  isFavorite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mediaToken" })
  mediaToken?: string;

  @SpeakeasyMetadata({ data: "json, name=mediaType" })
  mediaType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: number;

  @SpeakeasyMetadata({ data: "json, name=parentPath" })
  parentPath?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: NodePermissions;

  @SpeakeasyMetadata({ data: "json, name=quota" })
  quota?: number;

  @SpeakeasyMetadata({ data: "json, name=recycleBinRetentionPeriod" })
  recycleBinRetentionPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=timestampCreation" })
  timestampCreation?: Date;

  @SpeakeasyMetadata({ data: "json, name=timestampModification" })
  timestampModification?: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: NodeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: UserInfo;
}
