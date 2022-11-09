import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Device } from "./device";
/**
 * Response containing found devices.
**/
export declare class FindDevicesByDeviceIdentifierResponse extends SpeakeasyBase {
    devices?: Device[];
    nextPageToken?: string;
    totalSize?: number;
}
