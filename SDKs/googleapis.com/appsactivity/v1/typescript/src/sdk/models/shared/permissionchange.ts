import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Permission } from "./permission";
import { Permission } from "./permission";


// PermissionChange
/** 
 * Contains information about a Drive object's permissions that changed as a result of a permissionChange type event.
**/
export class PermissionChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=addedPermissions", elemType: shared.Permission })
  addedPermissions?: Permission[];

  @Metadata({ data: "json, name=removedPermissions", elemType: shared.Permission })
  removedPermissions?: Permission[];
}
