import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceIdentifier } from "./deviceidentifier";
import { DeviceMetadata } from "./devicemetadata";
/**
 * Identifies metadata updates to one device.
**/
export declare class UpdateMetadataArguments extends SpeakeasyBase {
    deviceId?: string;
    deviceIdentifier?: DeviceIdentifier;
    deviceMetadata?: DeviceMetadata;
}
