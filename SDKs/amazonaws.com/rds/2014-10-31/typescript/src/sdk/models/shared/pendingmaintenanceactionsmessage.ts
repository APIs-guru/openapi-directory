import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourcePendingMaintenanceActions } from "./resourcependingmaintenanceactions";



// PendingMaintenanceActionsMessage
/** 
 * Data returned from the <b>DescribePendingMaintenanceActions</b> action.
**/
export class PendingMaintenanceActionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ResourcePendingMaintenanceActions })
  pendingMaintenanceActions?: ResourcePendingMaintenanceActions[];
}
