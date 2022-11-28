import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PendingMaintenanceAction
/** 
 * Provides information about a pending maintenance action for a resource.
**/
export class PendingMaintenanceAction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  action?: string;

  @SpeakeasyMetadata()
  autoAppliedAfterDate?: Date;

  @SpeakeasyMetadata()
  currentApplyDate?: Date;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  forcedApplyDate?: Date;

  @SpeakeasyMetadata()
  optInStatus?: string;
}
