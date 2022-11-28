import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";



// PermissionChange
/** 
 * Contains information about a Drive object's permissions that changed as a result of a permissionChange type event.
**/
export class PermissionChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addedPermissions", elemType: Permission })
  addedPermissions?: Permission[];

  @SpeakeasyMetadata({ data: "json, name=removedPermissions", elemType: Permission })
  removedPermissions?: Permission[];
}
