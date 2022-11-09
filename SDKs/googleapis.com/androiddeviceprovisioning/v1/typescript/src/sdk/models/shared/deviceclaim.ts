import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DeviceClaimAdditionalServiceEnum {
    AdditionalServiceUnspecified = "ADDITIONAL_SERVICE_UNSPECIFIED"
,    DeviceProtection = "DEVICE_PROTECTION"
}

export enum DeviceClaimSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED"
,    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK"
,    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}


// DeviceClaim
/** 
 * A record of a device claimed by a reseller for a customer. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. To learn more, read [Claim devices for customers](/zero-touch/guides/how-it-works#claim).
**/
export class DeviceClaim extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalService" })
  additionalService?: DeviceClaimAdditionalServiceEnum;

  @Metadata({ data: "json, name=ownerCompanyId" })
  ownerCompanyId?: string;

  @Metadata({ data: "json, name=resellerId" })
  resellerId?: string;

  @Metadata({ data: "json, name=sectionType" })
  sectionType?: DeviceClaimSectionTypeEnum;

  @Metadata({ data: "json, name=vacationModeExpireTime" })
  vacationModeExpireTime?: string;

  @Metadata({ data: "json, name=vacationModeStartTime" })
  vacationModeStartTime?: string;
}
