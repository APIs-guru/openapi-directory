import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PerAppResult } from "./perappresult";


// ClearAppsDataStatus
/** 
 * Status of the CLEAR_APP_DATA command to clear the data of specified apps from the device.
**/
export class ClearAppsDataStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.PerAppResult })
  results?: Map<string, PerAppResult>;
}
