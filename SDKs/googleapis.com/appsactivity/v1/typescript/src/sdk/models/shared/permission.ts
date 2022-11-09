import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";

export enum PermissionRoleEnum {
    Commenter = "commenter"
,    FileOrganizer = "fileOrganizer"
,    Owner = "owner"
,    PublishedReader = "publishedReader"
,    Reader = "reader"
,    Writer = "writer"
}

export enum PermissionTypeEnum {
    Anyone = "anyone"
,    Domain = "domain"
,    Group = "group"
,    User = "user"
}


// Permission
/** 
 * Contains information about the permissions and type of access allowed with regards to a Google Drive object. This is a subset of the fields contained in a corresponding Drive Permissions object.
**/
export class Permission extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=permissionId" })
  permissionId?: string;

  @Metadata({ data: "json, name=role" })
  role?: PermissionRoleEnum;

  @Metadata({ data: "json, name=type" })
  type?: PermissionTypeEnum;

  @Metadata({ data: "json, name=user" })
  user?: User;

  @Metadata({ data: "json, name=withLink" })
  withLink?: boolean;
}
