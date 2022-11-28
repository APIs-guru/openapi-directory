import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceReference } from "./devicereference";
/**
 * Request message for customer to unclaim a device.
**/
export declare class CustomerUnclaimDeviceRequest extends SpeakeasyBase {
    device?: DeviceReference;
}
