import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PermissionEnum } from "./permissionenum";
import { DataLakePrincipal } from "./datalakeprincipal";


// PrincipalPermissions
/** 
 * Permissions granted to a principal.
**/
export class PrincipalPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=Permissions" })
  permissions?: PermissionEnum[];

  @Metadata({ data: "json, name=Principal" })
  principal?: DataLakePrincipal;
}
