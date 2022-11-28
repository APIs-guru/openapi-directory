import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetailsMap } from "./detailsmap";
import { PermissionEnum } from "./permissionenum";
import { DataLakePrincipal } from "./datalakeprincipal";
import { Resource } from "./resource";



// PrincipalResourcePermissions
/** 
 * The permissions granted or revoked on a resource.
**/
export class PrincipalResourcePermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalDetails" })
  additionalDetails?: DetailsMap;

  @SpeakeasyMetadata({ data: "json, name=Permissions" })
  permissions?: PermissionEnum[];

  @SpeakeasyMetadata({ data: "json, name=PermissionsWithGrantOption" })
  permissionsWithGrantOption?: PermissionEnum[];

  @SpeakeasyMetadata({ data: "json, name=Principal" })
  principal?: DataLakePrincipal;

  @SpeakeasyMetadata({ data: "json, name=Resource" })
  resource?: Resource;
}
