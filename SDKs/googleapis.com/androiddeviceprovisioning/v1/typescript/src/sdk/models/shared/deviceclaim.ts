import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DeviceClaimAdditionalServiceEnum {
    AdditionalServiceUnspecified = "ADDITIONAL_SERVICE_UNSPECIFIED",
    DeviceProtection = "DEVICE_PROTECTION"
}

export enum DeviceClaimSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK",
    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}


// DeviceClaim
/** 
 * A record of a device claimed by a reseller for a customer. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. To learn more, read [Claim devices for customers](/zero-touch/guides/how-it-works#claim).
**/
export class DeviceClaim extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalService" })
  additionalService?: DeviceClaimAdditionalServiceEnum;

  @SpeakeasyMetadata({ data: "json, name=googleWorkspaceCustomerId" })
  googleWorkspaceCustomerId?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerCompanyId" })
  ownerCompanyId?: string;

  @SpeakeasyMetadata({ data: "json, name=resellerId" })
  resellerId?: string;

  @SpeakeasyMetadata({ data: "json, name=sectionType" })
  sectionType?: DeviceClaimSectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=vacationModeExpireTime" })
  vacationModeExpireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=vacationModeStartTime" })
  vacationModeStartTime?: string;
}
