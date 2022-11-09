import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FindDevicesByOwnerRequestSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED"
,    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK"
,    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}


// FindDevicesByOwnerRequest
/** 
 * Request to find devices by customers.
**/
export class FindDevicesByOwnerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerId" })
  customerId?: string[];

  @Metadata({ data: "json, name=limit" })
  limit?: string;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=sectionType" })
  sectionType?: FindDevicesByOwnerRequestSectionTypeEnum;
}
