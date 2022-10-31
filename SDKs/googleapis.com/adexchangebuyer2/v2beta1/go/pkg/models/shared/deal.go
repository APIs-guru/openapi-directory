package shared




type DealCreativePreApprovalPolicyEnum string

const (
    DealCreativePreApprovalPolicyEnumCreativePreApprovalPolicyUnspecified DealCreativePreApprovalPolicyEnum = "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED"
DealCreativePreApprovalPolicyEnumSellerPreApprovalRequired DealCreativePreApprovalPolicyEnum = "SELLER_PRE_APPROVAL_REQUIRED"
DealCreativePreApprovalPolicyEnumSellerPreApprovalNotRequired DealCreativePreApprovalPolicyEnum = "SELLER_PRE_APPROVAL_NOT_REQUIRED"
)



type DealCreativeSafeFrameCompatibilityEnum string

const (
    DealCreativeSafeFrameCompatibilityEnumCreativeSafeFrameCompatibilityUnspecified DealCreativeSafeFrameCompatibilityEnum = "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED"
DealCreativeSafeFrameCompatibilityEnumCompatible DealCreativeSafeFrameCompatibilityEnum = "COMPATIBLE"
DealCreativeSafeFrameCompatibilityEnumIncompatible DealCreativeSafeFrameCompatibilityEnum = "INCOMPATIBLE"
)



type DealProgrammaticCreativeSourceEnum string

const (
    DealProgrammaticCreativeSourceEnumProgrammaticCreativeSourceUnspecified DealProgrammaticCreativeSourceEnum = "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED"
DealProgrammaticCreativeSourceEnumAdvertiser DealProgrammaticCreativeSourceEnum = "ADVERTISER"
DealProgrammaticCreativeSourceEnumPublisher DealProgrammaticCreativeSourceEnum = "PUBLISHER"
)



type DealSyndicationProductEnum string

const (
    DealSyndicationProductEnumSyndicationProductUnspecified DealSyndicationProductEnum = "SYNDICATION_PRODUCT_UNSPECIFIED"
DealSyndicationProductEnumContent DealSyndicationProductEnum = "CONTENT"
DealSyndicationProductEnumMobile DealSyndicationProductEnum = "MOBILE"
DealSyndicationProductEnumVideo DealSyndicationProductEnum = "VIDEO"
DealSyndicationProductEnumGames DealSyndicationProductEnum = "GAMES"
)


type Deal struct {
    AvailableEndTime *string `json:"availableEndTime,omitempty"`
    AvailableStartTime *string `json:"availableStartTime,omitempty"`
    BuyerPrivateData *PrivateData `json:"buyerPrivateData,omitempty"`
    CreateProductID *string `json:"createProductId,omitempty"`
    CreateProductRevision *string `json:"createProductRevision,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    CreativePreApprovalPolicy *DealCreativePreApprovalPolicyEnum `json:"creativePreApprovalPolicy,omitempty"`
    CreativeRestrictions *CreativeRestrictions `json:"creativeRestrictions,omitempty"`
    CreativeSafeFrameCompatibility *DealCreativeSafeFrameCompatibilityEnum `json:"creativeSafeFrameCompatibility,omitempty"`
    DealID *string `json:"dealId,omitempty"`
    DealServingMetadata *DealServingMetadata `json:"dealServingMetadata,omitempty"`
    DealTerms *DealTerms `json:"dealTerms,omitempty"`
    DeliveryControl *DeliveryControl `json:"deliveryControl,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    ExternalDealID *string `json:"externalDealId,omitempty"`
    IsSetupComplete *bool `json:"isSetupComplete,omitempty"`
    ProgrammaticCreativeSource *DealProgrammaticCreativeSourceEnum `json:"programmaticCreativeSource,omitempty"`
    ProposalID *string `json:"proposalId,omitempty"`
    SellerContacts []ContactInformation `json:"sellerContacts,omitempty"`
    SyndicationProduct *DealSyndicationProductEnum `json:"syndicationProduct,omitempty"`
    Targeting *MarketplaceTargeting `json:"targeting,omitempty"`
    TargetingCriterion []TargetingCriteria `json:"targetingCriterion,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    WebPropertyCode *string `json:"webPropertyCode,omitempty"`
    
}

