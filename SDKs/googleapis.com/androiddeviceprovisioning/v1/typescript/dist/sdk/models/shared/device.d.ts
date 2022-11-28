import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceClaim } from "./deviceclaim";
import { DeviceIdentifier } from "./deviceidentifier";
import { DeviceMetadata } from "./devicemetadata";
/**
 * An Android or Chrome OS device registered for zero-touch enrollment.
**/
export declare class Device extends SpeakeasyBase {
    claims?: DeviceClaim[];
    configuration?: string;
    deviceId?: string;
    deviceIdentifier?: DeviceIdentifier;
    deviceMetadata?: DeviceMetadata;
    name?: string;
}
