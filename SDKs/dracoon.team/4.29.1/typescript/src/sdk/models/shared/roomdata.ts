import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RoomData } from "./roomdata";
import { UserInfo } from "./userinfo";
import { NodePermissions } from "./nodepermissions";
import { UserInfo } from "./userinfo";

export enum RoomDataTypeEnum {
    Room = "room"
}


// RoomData
/** 
 * Room information
**/
export class RoomData extends SpeakeasyBase {
  @Metadata({ data: "json, name=children", elemType: shared.RoomData })
  children?: RoomData[];

  @Metadata({ data: "json, name=cntAdmins" })
  cntAdmins?: number;

  @Metadata({ data: "json, name=cntDownloadShares" })
  cntDownloadShares?: number;

  @Metadata({ data: "json, name=cntUploadShares" })
  cntUploadShares?: number;

  @Metadata({ data: "json, name=cntUsers" })
  cntUsers?: number;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: UserInfo;

  @Metadata({ data: "json, name=hasRecycleBin" })
  hasRecycleBin: boolean;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=isEncrypted" })
  isEncrypted: boolean;

  @Metadata({ data: "json, name=isFavorite" })
  isFavorite?: boolean;

  @Metadata({ data: "json, name=isGranted" })
  isGranted: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parentId" })
  parentId?: number;

  @Metadata({ data: "json, name=permissions" })
  permissions?: NodePermissions;

  @Metadata({ data: "json, name=quota" })
  quota?: number;

  @Metadata({ data: "json, name=recycleBinRetentionPeriod" })
  recycleBinRetentionPeriod: number;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=type" })
  type?: RoomDataTypeEnum;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy?: UserInfo;
}
