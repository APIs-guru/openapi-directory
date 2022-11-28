import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceTierConfig } from "./devicetierconfig";
/**
 * Response listing existing device tier configs.
**/
export declare class ListDeviceTierConfigsResponse extends SpeakeasyBase {
    deviceTierConfigs?: DeviceTierConfig[];
    nextPageToken?: string;
}
