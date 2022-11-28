import { SpeakeasyBase } from "../../../internal/utils";
import { TelephonyInfo } from "./telephonyinfo";
/**
 * Device network info.
**/
export declare class NetworkInfo extends SpeakeasyBase {
    imei?: string;
    meid?: string;
    networkOperatorName?: string;
    telephonyInfos?: TelephonyInfo[];
    wifiMacAddress?: string;
}
