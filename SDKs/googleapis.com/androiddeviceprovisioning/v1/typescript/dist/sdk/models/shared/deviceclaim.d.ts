import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum DeviceClaimAdditionalServiceEnum {
    AdditionalServiceUnspecified = "ADDITIONAL_SERVICE_UNSPECIFIED",
    DeviceProtection = "DEVICE_PROTECTION"
}
export declare enum DeviceClaimSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK",
    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}
/**
 * A record of a device claimed by a reseller for a customer. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. To learn more, read [Claim devices for customers](/zero-touch/guides/how-it-works#claim).
**/
export declare class DeviceClaim extends SpeakeasyBase {
    additionalService?: DeviceClaimAdditionalServiceEnum;
    ownerCompanyId?: string;
    resellerId?: string;
    sectionType?: DeviceClaimSectionTypeEnum;
    vacationModeExpireTime?: string;
    vacationModeStartTime?: string;
}
