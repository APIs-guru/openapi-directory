import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceIdentifier } from "./deviceidentifier";
/**
 * Request to find devices.
**/
export declare class FindDevicesByDeviceIdentifierRequest extends SpeakeasyBase {
    deviceIdentifier?: DeviceIdentifier;
    limit?: string;
    pageToken?: string;
}
