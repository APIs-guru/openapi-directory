import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceReference } from "./devicereference";
/**
 * Request message for customer to assign a configuration to device.
**/
export declare class CustomerApplyConfigurationRequest extends SpeakeasyBase {
    configuration?: string;
    device?: DeviceReference;
}
