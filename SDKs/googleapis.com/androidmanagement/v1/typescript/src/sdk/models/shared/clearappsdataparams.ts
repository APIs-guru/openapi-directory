import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClearAppsDataParams
/** 
 * Parameters associated with the CLEAR_APP_DATA command to clear the data of specified apps from the device.
**/
export class ClearAppsDataParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=packageNames" })
  packageNames?: string[];
}
