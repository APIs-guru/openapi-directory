import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NewPermissionsEvent
/** 
 * An event generated when new permissions are added to an app.
**/
export class NewPermissionsEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvedPermissions" })
  approvedPermissions?: string[];

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedPermissions" })
  requestedPermissions?: string[];
}
