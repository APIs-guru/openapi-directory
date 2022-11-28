import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceMetadata } from "./devicemetadata";
/**
 * Request to set metadata for a device.
**/
export declare class UpdateDeviceMetadataRequest extends SpeakeasyBase {
    deviceMetadata?: DeviceMetadata;
}
