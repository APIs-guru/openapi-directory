import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserInfo } from "./userinfo";
import { UserInfo } from "./userinfo";
import { UserInfo } from "./userinfo";

export enum DeletedNodeTypeEnum {
    Folder = "folder"
,    File = "file"
}


// DeletedNode
/** 
 * Deleted node information (Deleted node can be a folder or file)
**/
export class DeletedNode extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessedAt" })
  accessedAt?: Date;

  @Metadata({ data: "json, name=classification" })
  classification?: number;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: UserInfo;

  @Metadata({ data: "json, name=deletedAt" })
  deletedAt?: Date;

  @Metadata({ data: "json, name=deletedBy" })
  deletedBy?: UserInfo;

  @Metadata({ data: "json, name=expireAt" })
  expireAt?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isEncrypted" })
  isEncrypted?: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=parentId" })
  parentId: number;

  @Metadata({ data: "json, name=parentPath" })
  parentPath: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=type" })
  type: DeletedNodeTypeEnum;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy?: UserInfo;
}
