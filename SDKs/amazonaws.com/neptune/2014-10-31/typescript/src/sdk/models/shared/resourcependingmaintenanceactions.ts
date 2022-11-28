import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PendingMaintenanceAction } from "./pendingmaintenanceaction";



// ResourcePendingMaintenanceActions
/** 
 * Describes the pending maintenance actions for a resource.
**/
export class ResourcePendingMaintenanceActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PendingMaintenanceAction })
  pendingMaintenanceActionDetails?: PendingMaintenanceAction[];

  @SpeakeasyMetadata()
  resourceIdentifier?: string;
}
