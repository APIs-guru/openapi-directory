import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PermissionEnum } from "./permissionenum";
import { DataLakePrincipal } from "./datalakeprincipal";
import { Resource } from "./resource";



// BatchPermissionsRequestEntry
/** 
 * A permission to a resource granted by batch operation to the principal.
**/
export class BatchPermissionsRequestEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Permissions" })
  permissions?: PermissionEnum[];

  @SpeakeasyMetadata({ data: "json, name=PermissionsWithGrantOption" })
  permissionsWithGrantOption?: PermissionEnum[];

  @SpeakeasyMetadata({ data: "json, name=Principal" })
  principal?: DataLakePrincipal;

  @SpeakeasyMetadata({ data: "json, name=Resource" })
  resource?: Resource;
}
