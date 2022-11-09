import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClearAppsDataParams
/** 
 * Parameters associated with the CLEAR_APP_DATA command to clear the data of specified apps from the device.
**/
export class ClearAppsDataParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=packageNames" })
  packageNames?: string[];
}
