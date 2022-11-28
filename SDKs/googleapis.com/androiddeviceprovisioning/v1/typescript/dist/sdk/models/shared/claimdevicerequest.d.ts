import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceIdentifier } from "./deviceidentifier";
import { DeviceMetadata } from "./devicemetadata";
export declare enum ClaimDeviceRequestSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK",
    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}
/**
 * Request message to claim a device on behalf of a customer.
**/
export declare class ClaimDeviceRequest extends SpeakeasyBase {
    customerId?: string;
    deviceIdentifier?: DeviceIdentifier;
    deviceMetadata?: DeviceMetadata;
    googleWorkspaceCustomerId?: string;
    preProvisioningToken?: string;
    sectionType?: ClaimDeviceRequestSectionTypeEnum;
    simlockProfileId?: string;
}
