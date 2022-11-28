import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceReference } from "./devicereference";
/**
 * Request message for customer to remove the configuration from device.
**/
export declare class CustomerRemoveConfigurationRequest extends SpeakeasyBase {
    device?: DeviceReference;
}
