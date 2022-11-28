import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceIdentifier } from "./deviceidentifier";


export enum PartnerUnclaimSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK",
    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}


// PartnerUnclaim
/** 
 * Identifies one unclaim request.
**/
export class PartnerUnclaim extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceIdentifier" })
  deviceIdentifier?: DeviceIdentifier;

  @SpeakeasyMetadata({ data: "json, name=sectionType" })
  sectionType?: PartnerUnclaimSectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=vacationModeDays" })
  vacationModeDays?: number;

  @SpeakeasyMetadata({ data: "json, name=vacationModeExpireTime" })
  vacationModeExpireTime?: string;
}
