import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceIdentifier } from "./deviceidentifier";
import { DeviceMetadata } from "./devicemetadata";


export enum PartnerClaimSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK",
    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}


// PartnerClaim
/** 
 * Identifies one claim request.
**/
export class PartnerClaim extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceIdentifier" })
  deviceIdentifier?: DeviceIdentifier;

  @SpeakeasyMetadata({ data: "json, name=deviceMetadata" })
  deviceMetadata?: DeviceMetadata;

  @SpeakeasyMetadata({ data: "json, name=googleWorkspaceCustomerId" })
  googleWorkspaceCustomerId?: string;

  @SpeakeasyMetadata({ data: "json, name=preProvisioningToken" })
  preProvisioningToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sectionType" })
  sectionType?: PartnerClaimSectionTypeEnum;
}
