import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
import { NodePermissions } from "./nodepermissions";


export enum RoomDataTypeEnum {
    Room = "room"
}


// RoomData
/** 
 * Room information
**/
export class RoomData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=children", elemType: RoomData })
  children?: RoomData[];

  @SpeakeasyMetadata({ data: "json, name=cntAdmins" })
  cntAdmins?: number;

  @SpeakeasyMetadata({ data: "json, name=cntDownloadShares" })
  cntDownloadShares?: number;

  @SpeakeasyMetadata({ data: "json, name=cntUploadShares" })
  cntUploadShares?: number;

  @SpeakeasyMetadata({ data: "json, name=cntUsers" })
  cntUsers?: number;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: UserInfo;

  @SpeakeasyMetadata({ data: "json, name=hasRecycleBin" })
  hasRecycleBin: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=isEncrypted" })
  isEncrypted: boolean;

  @SpeakeasyMetadata({ data: "json, name=isFavorite" })
  isFavorite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isGranted" })
  isGranted: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: number;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: NodePermissions;

  @SpeakeasyMetadata({ data: "json, name=quota" })
  quota?: number;

  @SpeakeasyMetadata({ data: "json, name=recycleBinRetentionPeriod" })
  recycleBinRetentionPeriod: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: RoomDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: UserInfo;
}
