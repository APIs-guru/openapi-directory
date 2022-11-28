import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourcePendingMaintenanceActions } from "./resourcependingmaintenanceactions";



export class ApplyPendingMaintenanceActionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
}
