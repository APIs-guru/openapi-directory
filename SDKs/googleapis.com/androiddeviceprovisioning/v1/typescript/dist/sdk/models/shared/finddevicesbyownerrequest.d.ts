import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum FindDevicesByOwnerRequestSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK",
    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}
/**
 * Request to find devices by customers.
**/
export declare class FindDevicesByOwnerRequest extends SpeakeasyBase {
    customerId?: string[];
    limit?: string;
    pageToken?: string;
    sectionType?: FindDevicesByOwnerRequestSectionTypeEnum;
}
