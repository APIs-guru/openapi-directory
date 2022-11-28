import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceIdentifier } from "./deviceidentifier";
export declare enum UnclaimDeviceRequestSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK",
    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}
/**
 * Request message to unclaim a device.
**/
export declare class UnclaimDeviceRequest extends SpeakeasyBase {
    deviceId?: string;
    deviceIdentifier?: DeviceIdentifier;
    sectionType?: UnclaimDeviceRequestSectionTypeEnum;
    vacationModeDays?: number;
    vacationModeExpireTime?: string;
}
