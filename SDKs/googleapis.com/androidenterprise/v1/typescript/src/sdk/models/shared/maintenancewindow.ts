import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MaintenanceWindow
/** 
 * Maintenance window for managed Google Play Accounts. This allows Play store to update the apps on the foreground in the designated window.
**/
export class MaintenanceWindow extends SpeakeasyBase {
  @Metadata({ data: "json, name=durationMs" })
  durationMs?: string;

  @Metadata({ data: "json, name=startTimeAfterMidnightMs" })
  startTimeAfterMidnightMs?: string;
}
