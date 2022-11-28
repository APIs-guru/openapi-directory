import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MaintenanceWindow
/** 
 * Maintenance window for managed Google Play Accounts. This allows Play store to update the apps on the foreground in the designated window.
**/
export class MaintenanceWindow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=durationMs" })
  durationMs?: string;

  @SpeakeasyMetadata({ data: "json, name=startTimeAfterMidnightMs" })
  startTimeAfterMidnightMs?: string;
}
