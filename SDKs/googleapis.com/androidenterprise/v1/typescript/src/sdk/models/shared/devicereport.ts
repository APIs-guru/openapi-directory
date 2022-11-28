import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppState } from "./appstate";



// DeviceReport
/** 
 * Device report updated with the latest app states for managed apps on the device.
**/
export class DeviceReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appState", elemType: AppState })
  appState?: AppState[];

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedTimestampMillis" })
  lastUpdatedTimestampMillis?: string;
}
