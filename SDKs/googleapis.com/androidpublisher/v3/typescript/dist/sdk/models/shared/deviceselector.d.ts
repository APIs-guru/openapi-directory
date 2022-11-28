import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceRam } from "./deviceram";
import { DeviceId } from "./deviceid";
import { SystemFeature } from "./systemfeature";
/**
 * Selector for a device group. A selector consists of a set of conditions on the device that should all match (logical AND) to determine a device group eligibility. For instance, if a selector specifies RAM conditions, device model inclusion and device model exclusion, a device is considered to match if: device matches RAM conditions AND device matches one of the included device models AND device doesn't match excluded device models
**/
export declare class DeviceSelector extends SpeakeasyBase {
    deviceRam?: DeviceRam;
    excludedDeviceIds?: DeviceId[];
    forbiddenSystemFeatures?: SystemFeature[];
    includedDeviceIds?: DeviceId[];
    requiredSystemFeatures?: SystemFeature[];
}
