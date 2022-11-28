import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PermissionEntityPermissionEnum {
    Full = "full",
    Readonly = "readonly",
    Writeonly = "writeonly",
    List = "list",
    History = "history",
    Admin = "admin",
    Bundle = "bundle"
}


// PermissionEntity
/** 
 * List Permissions
**/
export class PermissionEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=group_name" })
  groupName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: PermissionEntityPermissionEnum;

  @SpeakeasyMetadata({ data: "json, name=recursive" })
  recursive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
