import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceIdentifier } from "./deviceidentifier";
/**
 * Request to find devices.
**/
export declare class FindDevicesByDeviceIdentifierRequest extends SpeakeasyBase {
    deviceIdentifier?: DeviceIdentifier;
    limit?: string;
    pageToken?: string;
}
