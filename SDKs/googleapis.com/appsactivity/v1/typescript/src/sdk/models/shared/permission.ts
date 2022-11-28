import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";


export enum PermissionRoleEnum {
    Commenter = "commenter",
    FileOrganizer = "fileOrganizer",
    Owner = "owner",
    PublishedReader = "publishedReader",
    Reader = "reader",
    Writer = "writer"
}

export enum PermissionTypeEnum {
    Anyone = "anyone",
    Domain = "domain",
    Group = "group",
    User = "user"
}


// Permission
/** 
 * Contains information about the permissions and type of access allowed with regards to a Google Drive object. This is a subset of the fields contained in a corresponding Drive Permissions object.
**/
export class Permission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=permissionId" })
  permissionId?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: PermissionRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PermissionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: User;

  @SpeakeasyMetadata({ data: "json, name=withLink" })
  withLink?: boolean;
}
