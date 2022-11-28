import { SpeakeasyBase } from "../../../internal/utils";
import { AppState } from "./appstate";
/**
 * Device report updated with the latest app states for managed apps on the device.
**/
export declare class DeviceReport extends SpeakeasyBase {
    appState?: AppState[];
    lastUpdatedTimestampMillis?: string;
}
