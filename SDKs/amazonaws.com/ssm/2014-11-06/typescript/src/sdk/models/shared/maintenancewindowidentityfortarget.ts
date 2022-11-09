import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MaintenanceWindowIdentityForTarget
/** 
 * The maintenance window to which the specified target belongs.
**/
export class MaintenanceWindowIdentityForTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=WindowId" })
  windowId?: string;
}
