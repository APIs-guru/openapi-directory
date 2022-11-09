import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PermissionEntityPermissionEnum {
    Full = "full"
,    Readonly = "readonly"
,    Writeonly = "writeonly"
,    List = "list"
,    History = "history"
,    Admin = "admin"
,    Bundle = "bundle"
}


// PermissionEntity
/** 
 * List Permissions
**/
export class PermissionEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=group_id" })
  groupId?: number;

  @Metadata({ data: "json, name=group_name" })
  groupName?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=permission" })
  permission?: PermissionEntityPermissionEnum;

  @Metadata({ data: "json, name=recursive" })
  recursive?: boolean;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
