import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NewPermissionsEvent
/** 
 * An event generated when new permissions are added to an app.
**/
export class NewPermissionsEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvedPermissions" })
  approvedPermissions?: string[];

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=requestedPermissions" })
  requestedPermissions?: string[];
}
