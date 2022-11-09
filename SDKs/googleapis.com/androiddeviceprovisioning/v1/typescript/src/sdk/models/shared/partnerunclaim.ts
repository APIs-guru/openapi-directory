import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceIdentifier } from "./deviceidentifier";

export enum PartnerUnclaimSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED"
,    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK"
,    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}


// PartnerUnclaim
/** 
 * Identifies one unclaim request.
**/
export class PartnerUnclaim extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=deviceIdentifier" })
  deviceIdentifier?: DeviceIdentifier;

  @Metadata({ data: "json, name=sectionType" })
  sectionType?: PartnerUnclaimSectionTypeEnum;

  @Metadata({ data: "json, name=vacationModeDays" })
  vacationModeDays?: number;

  @Metadata({ data: "json, name=vacationModeExpireTime" })
  vacationModeExpireTime?: string;
}
