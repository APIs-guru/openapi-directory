import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceIdentifier } from "./deviceidentifier";
export declare enum PartnerUnclaimSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK",
    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}
/**
 * Identifies one unclaim request.
**/
export declare class PartnerUnclaim extends SpeakeasyBase {
    deviceId?: string;
    deviceIdentifier?: DeviceIdentifier;
    sectionType?: PartnerUnclaimSectionTypeEnum;
    vacationModeDays?: number;
    vacationModeExpireTime?: string;
}
