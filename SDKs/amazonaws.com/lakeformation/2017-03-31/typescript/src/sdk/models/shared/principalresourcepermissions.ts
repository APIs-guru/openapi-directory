import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DetailsMap } from "./detailsmap";
import { PermissionEnum } from "./permissionenum";
import { PermissionEnum } from "./permissionenum";
import { DataLakePrincipal } from "./datalakeprincipal";
import { Resource } from "./resource";


// PrincipalResourcePermissions
/** 
 * The permissions granted or revoked on a resource.
**/
export class PrincipalResourcePermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalDetails" })
  additionalDetails?: DetailsMap;

  @Metadata({ data: "json, name=Permissions" })
  permissions?: PermissionEnum[];

  @Metadata({ data: "json, name=PermissionsWithGrantOption" })
  permissionsWithGrantOption?: PermissionEnum[];

  @Metadata({ data: "json, name=Principal" })
  principal?: DataLakePrincipal;

  @Metadata({ data: "json, name=Resource" })
  resource?: Resource;
}
