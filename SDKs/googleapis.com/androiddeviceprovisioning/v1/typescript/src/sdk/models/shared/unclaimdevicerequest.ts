import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceIdentifier } from "./deviceidentifier";


export enum UnclaimDeviceRequestSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK",
    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}


// UnclaimDeviceRequest
/** 
 * Request message to unclaim a device.
**/
export class UnclaimDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceIdentifier" })
  deviceIdentifier?: DeviceIdentifier;

  @SpeakeasyMetadata({ data: "json, name=sectionType" })
  sectionType?: UnclaimDeviceRequestSectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=vacationModeDays" })
  vacationModeDays?: number;

  @SpeakeasyMetadata({ data: "json, name=vacationModeExpireTime" })
  vacationModeExpireTime?: string;
}
