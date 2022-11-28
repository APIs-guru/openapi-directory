import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MaintenanceWindowIdentityForTarget
/** 
 * The maintenance window to which the specified target belongs.
**/
export class MaintenanceWindowIdentityForTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=WindowId" })
  windowId?: string;
}
