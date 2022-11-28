import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FindDevicesByOwnerRequestSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK",
    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}


// FindDevicesByOwnerRequest
/** 
 * Request to find devices by customers.
**/
export class FindDevicesByOwnerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string[];

  @SpeakeasyMetadata({ data: "json, name=googleWorkspaceCustomerId" })
  googleWorkspaceCustomerId?: string[];

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sectionType" })
  sectionType?: FindDevicesByOwnerRequestSectionTypeEnum;
}
