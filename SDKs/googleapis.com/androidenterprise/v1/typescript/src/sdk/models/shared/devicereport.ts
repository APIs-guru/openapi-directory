import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppState } from "./appstate";


// DeviceReport
/** 
 * Device report updated with the latest app states for managed apps on the device.
**/
export class DeviceReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=appState", elemType: shared.AppState })
  appState?: AppState[];

  @Metadata({ data: "json, name=lastUpdatedTimestampMillis" })
  lastUpdatedTimestampMillis?: string;
}
