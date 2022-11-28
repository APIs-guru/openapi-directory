import { SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";
/**
 * Contains information about a Drive object's permissions that changed as a result of a permissionChange type event.
**/
export declare class PermissionChange extends SpeakeasyBase {
    addedPermissions?: Permission[];
    removedPermissions?: Permission[];
}
