import { SpeakeasyBase } from "../../../internal/utils";
import { PermissionEnum } from "./permissionenum";
import { DataLakePrincipal } from "./datalakeprincipal";
/**
 * Permissions granted to a principal.
**/
export declare class PrincipalPermissions extends SpeakeasyBase {
    permissions?: PermissionEnum[];
    principal?: DataLakePrincipal;
}
