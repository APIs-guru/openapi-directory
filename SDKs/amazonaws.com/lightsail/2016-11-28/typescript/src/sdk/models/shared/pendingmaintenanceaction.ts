import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PendingMaintenanceAction
/** 
 * Describes a pending database maintenance action.
**/
export class PendingMaintenanceAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=currentApplyDate" })
  currentApplyDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}
