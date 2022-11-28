import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreativeRequirementsCreativeFormatEnum {
    CreativeFormatUnspecified = "CREATIVE_FORMAT_UNSPECIFIED",
    Display = "DISPLAY",
    Video = "VIDEO"
}
export declare enum CreativeRequirementsCreativePreApprovalPolicyEnum {
    CreativePreApprovalPolicyUnspecified = "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
    SellerPreApprovalRequired = "SELLER_PRE_APPROVAL_REQUIRED",
    SellerPreApprovalNotRequired = "SELLER_PRE_APPROVAL_NOT_REQUIRED"
}
export declare enum CreativeRequirementsCreativeSafeFrameCompatibilityEnum {
    CreativeSafeFrameCompatibilityUnspecified = "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
    Compatible = "COMPATIBLE",
    Incompatible = "INCOMPATIBLE"
}
export declare enum CreativeRequirementsProgrammaticCreativeSourceEnum {
    ProgrammaticCreativeSourceUnspecified = "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
    Advertiser = "ADVERTISER",
    Publisher = "PUBLISHER"
}
export declare enum CreativeRequirementsSkippableAdTypeEnum {
    SkippableAdTypeUnspecified = "SKIPPABLE_AD_TYPE_UNSPECIFIED",
    Skippable = "SKIPPABLE",
    InstreamSelect = "INSTREAM_SELECT",
    NotSkippable = "NOT_SKIPPABLE",
    Any = "ANY"
}
/**
 * Message captures data about the creatives in the deal.
**/
export declare class CreativeRequirements extends SpeakeasyBase {
    creativeFormat?: CreativeRequirementsCreativeFormatEnum;
    creativePreApprovalPolicy?: CreativeRequirementsCreativePreApprovalPolicyEnum;
    creativeSafeFrameCompatibility?: CreativeRequirementsCreativeSafeFrameCompatibilityEnum;
    maxAdDurationMs?: string;
    programmaticCreativeSource?: CreativeRequirementsProgrammaticCreativeSourceEnum;
    skippableAdType?: CreativeRequirementsSkippableAdTypeEnum;
}
