import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceIdentifier } from "./deviceidentifier";

export enum UnclaimDeviceRequestSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED"
,    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK"
,    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}


// UnclaimDeviceRequest
/** 
 * Request message to unclaim a device.
**/
export class UnclaimDeviceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=deviceIdentifier" })
  deviceIdentifier?: DeviceIdentifier;

  @Metadata({ data: "json, name=sectionType" })
  sectionType?: UnclaimDeviceRequestSectionTypeEnum;

  @Metadata({ data: "json, name=vacationModeDays" })
  vacationModeDays?: number;

  @Metadata({ data: "json, name=vacationModeExpireTime" })
  vacationModeExpireTime?: string;
}
