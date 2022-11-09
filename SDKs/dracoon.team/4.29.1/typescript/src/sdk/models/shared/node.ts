import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Node } from "./node";
import { UserInfo } from "./userinfo";
import { EncryptionInfo } from "./encryptioninfo";
import { NodePermissions } from "./nodepermissions";
import { UserInfo } from "./userinfo";

export enum NodeTypeEnum {
    Room = "room"
,    Folder = "folder"
,    File = "file"
}


// Node
/** 
 * Node information (Node can be a room, folder or file)
**/
export class Node extends SpeakeasyBase {
  @Metadata({ data: "json, name=authParentId" })
  authParentId?: number;

  @Metadata({ data: "json, name=branchVersion" })
  branchVersion?: number;

  @Metadata({ data: "json, name=children", elemType: shared.Node })
  children?: Node[];

  @Metadata({ data: "json, name=classification" })
  classification?: number;

  @Metadata({ data: "json, name=cntAdmins" })
  cntAdmins?: number;

  @Metadata({ data: "json, name=cntChildren" })
  cntChildren?: number;

  @Metadata({ data: "json, name=cntComments" })
  cntComments?: number;

  @Metadata({ data: "json, name=cntDeletedVersions" })
  cntDeletedVersions?: number;

  @Metadata({ data: "json, name=cntDownloadShares" })
  cntDownloadShares?: number;

  @Metadata({ data: "json, name=cntFiles" })
  cntFiles?: number;

  @Metadata({ data: "json, name=cntFolders" })
  cntFolders?: number;

  @Metadata({ data: "json, name=cntRooms" })
  cntRooms?: number;

  @Metadata({ data: "json, name=cntUploadShares" })
  cntUploadShares?: number;

  @Metadata({ data: "json, name=cntUsers" })
  cntUsers?: number;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: UserInfo;

  @Metadata({ data: "json, name=encryptionInfo" })
  encryptionInfo?: EncryptionInfo;

  @Metadata({ data: "json, name=expireAt" })
  expireAt?: Date;

  @Metadata({ data: "json, name=fileType" })
  fileType?: string;

  @Metadata({ data: "json, name=hasActivitiesLog" })
  hasActivitiesLog?: boolean;

  @Metadata({ data: "json, name=hasRecycleBin" })
  hasRecycleBin?: boolean;

  @Metadata({ data: "json, name=hash" })
  hash?: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=inheritPermissions" })
  inheritPermissions?: boolean;

  @Metadata({ data: "json, name=isBrowsable" })
  isBrowsable?: boolean;

  @Metadata({ data: "json, name=isEncrypted" })
  isEncrypted?: boolean;

  @Metadata({ data: "json, name=isFavorite" })
  isFavorite?: boolean;

  @Metadata({ data: "json, name=mediaToken" })
  mediaToken?: string;

  @Metadata({ data: "json, name=mediaType" })
  mediaType?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=parentId" })
  parentId?: number;

  @Metadata({ data: "json, name=parentPath" })
  parentPath?: string;

  @Metadata({ data: "json, name=permissions" })
  permissions?: NodePermissions;

  @Metadata({ data: "json, name=quota" })
  quota?: number;

  @Metadata({ data: "json, name=recycleBinRetentionPeriod" })
  recycleBinRetentionPeriod?: number;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=timestampCreation" })
  timestampCreation?: Date;

  @Metadata({ data: "json, name=timestampModification" })
  timestampModification?: Date;

  @Metadata({ data: "json, name=type" })
  type: NodeTypeEnum;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy?: UserInfo;
}
