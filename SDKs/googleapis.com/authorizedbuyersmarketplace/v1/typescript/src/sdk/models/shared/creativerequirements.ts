import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreativeRequirementsCreativeFormatEnum {
    CreativeFormatUnspecified = "CREATIVE_FORMAT_UNSPECIFIED",
    Display = "DISPLAY",
    Video = "VIDEO"
}

export enum CreativeRequirementsCreativePreApprovalPolicyEnum {
    CreativePreApprovalPolicyUnspecified = "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
    SellerPreApprovalRequired = "SELLER_PRE_APPROVAL_REQUIRED",
    SellerPreApprovalNotRequired = "SELLER_PRE_APPROVAL_NOT_REQUIRED"
}

export enum CreativeRequirementsCreativeSafeFrameCompatibilityEnum {
    CreativeSafeFrameCompatibilityUnspecified = "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
    Compatible = "COMPATIBLE",
    Incompatible = "INCOMPATIBLE"
}

export enum CreativeRequirementsProgrammaticCreativeSourceEnum {
    ProgrammaticCreativeSourceUnspecified = "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
    Advertiser = "ADVERTISER",
    Publisher = "PUBLISHER"
}

export enum CreativeRequirementsSkippableAdTypeEnum {
    SkippableAdTypeUnspecified = "SKIPPABLE_AD_TYPE_UNSPECIFIED",
    Skippable = "SKIPPABLE",
    InstreamSelect = "INSTREAM_SELECT",
    NotSkippable = "NOT_SKIPPABLE",
    Any = "ANY"
}


// CreativeRequirements
/** 
 * Message captures data about the creatives in the deal.
**/
export class CreativeRequirements extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creativeFormat" })
  creativeFormat?: CreativeRequirementsCreativeFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=creativePreApprovalPolicy" })
  creativePreApprovalPolicy?: CreativeRequirementsCreativePreApprovalPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=creativeSafeFrameCompatibility" })
  creativeSafeFrameCompatibility?: CreativeRequirementsCreativeSafeFrameCompatibilityEnum;

  @SpeakeasyMetadata({ data: "json, name=maxAdDurationMs" })
  maxAdDurationMs?: string;

  @SpeakeasyMetadata({ data: "json, name=programmaticCreativeSource" })
  programmaticCreativeSource?: CreativeRequirementsProgrammaticCreativeSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=skippableAdType" })
  skippableAdType?: CreativeRequirementsSkippableAdTypeEnum;
}
