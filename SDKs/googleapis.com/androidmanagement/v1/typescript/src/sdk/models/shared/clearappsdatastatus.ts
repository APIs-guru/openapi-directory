import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PerAppResult } from "./perappresult";



// ClearAppsDataStatus
/** 
 * Status of the CLEAR_APP_DATA command to clear the data of specified apps from the device.
**/
export class ClearAppsDataStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: PerAppResult })
  results?: Map<string, PerAppResult>;
}
