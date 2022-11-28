import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceIdentifier } from "./deviceidentifier";
import { DeviceMetadata } from "./devicemetadata";
export declare enum PartnerClaimSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK",
    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}
/**
 * Identifies one claim request.
**/
export declare class PartnerClaim extends SpeakeasyBase {
    customerId?: string;
    deviceIdentifier?: DeviceIdentifier;
    deviceMetadata?: DeviceMetadata;
    googleWorkspaceCustomerId?: string;
    preProvisioningToken?: string;
    sectionType?: PartnerClaimSectionTypeEnum;
}
