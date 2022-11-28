import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";


export enum DeletedNodeTypeEnum {
    Folder = "folder",
    File = "file"
}


// DeletedNode
/** 
 * Deleted node information (Deleted node can be a folder or file)
**/
export class DeletedNode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessedAt" })
  accessedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: number;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: UserInfo;

  @SpeakeasyMetadata({ data: "json, name=deletedAt" })
  deletedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=deletedBy" })
  deletedBy?: UserInfo;

  @SpeakeasyMetadata({ data: "json, name=expireAt" })
  expireAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isEncrypted" })
  isEncrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId: number;

  @SpeakeasyMetadata({ data: "json, name=parentPath" })
  parentPath: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: DeletedNodeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: UserInfo;
}
