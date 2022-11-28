import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single device tier. Devices matching any of the device groups in device_group_names are considered to match the tier.
**/
export declare class DeviceTier extends SpeakeasyBase {
    deviceGroupNames?: string[];
    level?: number;
}
