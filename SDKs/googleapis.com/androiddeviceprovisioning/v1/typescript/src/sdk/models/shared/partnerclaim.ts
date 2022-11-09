import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceIdentifier } from "./deviceidentifier";
import { DeviceMetadata } from "./devicemetadata";

export enum PartnerClaimSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED"
,    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK"
,    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}


// PartnerClaim
/** 
 * Identifies one claim request.
**/
export class PartnerClaim extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=deviceIdentifier" })
  deviceIdentifier?: DeviceIdentifier;

  @Metadata({ data: "json, name=deviceMetadata" })
  deviceMetadata?: DeviceMetadata;

  @Metadata({ data: "json, name=sectionType" })
  sectionType?: PartnerClaimSectionTypeEnum;
}
