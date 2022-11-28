import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourcePendingMaintenanceActions } from "./resourcependingmaintenanceactions";



export class PendingMaintenanceActionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ResourcePendingMaintenanceActions })
  pendingMaintenanceActions?: ResourcePendingMaintenanceActions[];
}
