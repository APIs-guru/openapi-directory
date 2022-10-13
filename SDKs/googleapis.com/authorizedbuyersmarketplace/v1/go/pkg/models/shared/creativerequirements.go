package shared

type CreativeRequirementsCreativeFormatEnum string

const (
	CreativeRequirementsCreativeFormatEnumCreativeFormatUnspecified CreativeRequirementsCreativeFormatEnum = "CREATIVE_FORMAT_UNSPECIFIED"
	CreativeRequirementsCreativeFormatEnumDisplay                   CreativeRequirementsCreativeFormatEnum = "DISPLAY"
	CreativeRequirementsCreativeFormatEnumVideo                     CreativeRequirementsCreativeFormatEnum = "VIDEO"
)

type CreativeRequirementsCreativePreApprovalPolicyEnum string

const (
	CreativeRequirementsCreativePreApprovalPolicyEnumCreativePreApprovalPolicyUnspecified CreativeRequirementsCreativePreApprovalPolicyEnum = "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED"
	CreativeRequirementsCreativePreApprovalPolicyEnumSellerPreApprovalRequired            CreativeRequirementsCreativePreApprovalPolicyEnum = "SELLER_PRE_APPROVAL_REQUIRED"
	CreativeRequirementsCreativePreApprovalPolicyEnumSellerPreApprovalNotRequired         CreativeRequirementsCreativePreApprovalPolicyEnum = "SELLER_PRE_APPROVAL_NOT_REQUIRED"
)

type CreativeRequirementsCreativeSafeFrameCompatibilityEnum string

const (
	CreativeRequirementsCreativeSafeFrameCompatibilityEnumCreativeSafeFrameCompatibilityUnspecified CreativeRequirementsCreativeSafeFrameCompatibilityEnum = "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED"
	CreativeRequirementsCreativeSafeFrameCompatibilityEnumCompatible                                CreativeRequirementsCreativeSafeFrameCompatibilityEnum = "COMPATIBLE"
	CreativeRequirementsCreativeSafeFrameCompatibilityEnumIncompatible                              CreativeRequirementsCreativeSafeFrameCompatibilityEnum = "INCOMPATIBLE"
)

type CreativeRequirementsProgrammaticCreativeSourceEnum string

const (
	CreativeRequirementsProgrammaticCreativeSourceEnumProgrammaticCreativeSourceUnspecified CreativeRequirementsProgrammaticCreativeSourceEnum = "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED"
	CreativeRequirementsProgrammaticCreativeSourceEnumAdvertiser                            CreativeRequirementsProgrammaticCreativeSourceEnum = "ADVERTISER"
	CreativeRequirementsProgrammaticCreativeSourceEnumPublisher                             CreativeRequirementsProgrammaticCreativeSourceEnum = "PUBLISHER"
)

type CreativeRequirementsSkippableAdTypeEnum string

const (
	CreativeRequirementsSkippableAdTypeEnumSkippableAdTypeUnspecified CreativeRequirementsSkippableAdTypeEnum = "SKIPPABLE_AD_TYPE_UNSPECIFIED"
	CreativeRequirementsSkippableAdTypeEnumSkippable                  CreativeRequirementsSkippableAdTypeEnum = "SKIPPABLE"
	CreativeRequirementsSkippableAdTypeEnumInstreamSelect             CreativeRequirementsSkippableAdTypeEnum = "INSTREAM_SELECT"
	CreativeRequirementsSkippableAdTypeEnumNotSkippable               CreativeRequirementsSkippableAdTypeEnum = "NOT_SKIPPABLE"
	CreativeRequirementsSkippableAdTypeEnumAny                        CreativeRequirementsSkippableAdTypeEnum = "ANY"
)

type CreativeRequirements struct {
	CreativeFormat                 *CreativeRequirementsCreativeFormatEnum                 `json:"creativeFormat"`
	CreativePreApprovalPolicy      *CreativeRequirementsCreativePreApprovalPolicyEnum      `json:"creativePreApprovalPolicy"`
	CreativeSafeFrameCompatibility *CreativeRequirementsCreativeSafeFrameCompatibilityEnum `json:"creativeSafeFrameCompatibility"`
	MaxAdDurationMs                *string                                                 `json:"maxAdDurationMs"`
	ProgrammaticCreativeSource     *CreativeRequirementsProgrammaticCreativeSourceEnum     `json:"programmaticCreativeSource"`
	SkippableAdType                *CreativeRequirementsSkippableAdTypeEnum                `json:"skippableAdType"`
}
