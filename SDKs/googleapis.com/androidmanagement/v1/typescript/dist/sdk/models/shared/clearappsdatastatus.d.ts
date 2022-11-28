import { SpeakeasyBase } from "../../../internal/utils";
import { PerAppResult } from "./perappresult";
/**
 * Status of the CLEAR_APP_DATA command to clear the data of specified apps from the device.
**/
export declare class ClearAppsDataStatus extends SpeakeasyBase {
    results?: Map<string, PerAppResult>;
}
