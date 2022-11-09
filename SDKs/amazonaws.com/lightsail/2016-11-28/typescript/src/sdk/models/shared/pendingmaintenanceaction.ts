import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PendingMaintenanceAction
/** 
 * Describes a pending database maintenance action.
**/
export class PendingMaintenanceAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=currentApplyDate" })
  currentApplyDate?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;
}
