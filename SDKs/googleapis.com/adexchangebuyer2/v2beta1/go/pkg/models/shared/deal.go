package shared

type DealCreativePreApprovalPolicyEnum string

const (
	DealCreativePreApprovalPolicyEnumCreativePreApprovalPolicyUnspecified DealCreativePreApprovalPolicyEnum = "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED"
	DealCreativePreApprovalPolicyEnumSellerPreApprovalRequired            DealCreativePreApprovalPolicyEnum = "SELLER_PRE_APPROVAL_REQUIRED"
	DealCreativePreApprovalPolicyEnumSellerPreApprovalNotRequired         DealCreativePreApprovalPolicyEnum = "SELLER_PRE_APPROVAL_NOT_REQUIRED"
)

type DealCreativeSafeFrameCompatibilityEnum string

const (
	DealCreativeSafeFrameCompatibilityEnumCreativeSafeFrameCompatibilityUnspecified DealCreativeSafeFrameCompatibilityEnum = "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED"
	DealCreativeSafeFrameCompatibilityEnumCompatible                                DealCreativeSafeFrameCompatibilityEnum = "COMPATIBLE"
	DealCreativeSafeFrameCompatibilityEnumIncompatible                              DealCreativeSafeFrameCompatibilityEnum = "INCOMPATIBLE"
)

type DealProgrammaticCreativeSourceEnum string

const (
	DealProgrammaticCreativeSourceEnumProgrammaticCreativeSourceUnspecified DealProgrammaticCreativeSourceEnum = "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED"
	DealProgrammaticCreativeSourceEnumAdvertiser                            DealProgrammaticCreativeSourceEnum = "ADVERTISER"
	DealProgrammaticCreativeSourceEnumPublisher                             DealProgrammaticCreativeSourceEnum = "PUBLISHER"
)

type DealSyndicationProductEnum string

const (
	DealSyndicationProductEnumSyndicationProductUnspecified DealSyndicationProductEnum = "SYNDICATION_PRODUCT_UNSPECIFIED"
	DealSyndicationProductEnumContent                       DealSyndicationProductEnum = "CONTENT"
	DealSyndicationProductEnumMobile                        DealSyndicationProductEnum = "MOBILE"
	DealSyndicationProductEnumVideo                         DealSyndicationProductEnum = "VIDEO"
	DealSyndicationProductEnumGames                         DealSyndicationProductEnum = "GAMES"
)

type Deal struct {
	AvailableEndTime               *string                                 `json:"availableEndTime"`
	AvailableStartTime             *string                                 `json:"availableStartTime"`
	BuyerPrivateData               *PrivateData                            `json:"buyerPrivateData"`
	CreateProductID                *string                                 `json:"createProductId"`
	CreateProductRevision          *string                                 `json:"createProductRevision"`
	CreateTime                     *string                                 `json:"createTime"`
	CreativePreApprovalPolicy      *DealCreativePreApprovalPolicyEnum      `json:"creativePreApprovalPolicy"`
	CreativeRestrictions           *CreativeRestrictions                   `json:"creativeRestrictions"`
	CreativeSafeFrameCompatibility *DealCreativeSafeFrameCompatibilityEnum `json:"creativeSafeFrameCompatibility"`
	DealID                         *string                                 `json:"dealId"`
	DealServingMetadata            *DealServingMetadata                    `json:"dealServingMetadata"`
	DealTerms                      *DealTerms                              `json:"dealTerms"`
	DeliveryControl                *DeliveryControl                        `json:"deliveryControl"`
	Description                    *string                                 `json:"description"`
	DisplayName                    *string                                 `json:"displayName"`
	ExternalDealID                 *string                                 `json:"externalDealId"`
	IsSetupComplete                *bool                                   `json:"isSetupComplete"`
	ProgrammaticCreativeSource     *DealProgrammaticCreativeSourceEnum     `json:"programmaticCreativeSource"`
	ProposalID                     *string                                 `json:"proposalId"`
	SellerContacts                 []ContactInformation                    `json:"sellerContacts"`
	SyndicationProduct             *DealSyndicationProductEnum             `json:"syndicationProduct"`
	Targeting                      *MarketplaceTargeting                   `json:"targeting"`
	TargetingCriterion             []TargetingCriteria                     `json:"targetingCriterion"`
	UpdateTime                     *string                                 `json:"updateTime"`
	WebPropertyCode                *string                                 `json:"webPropertyCode"`
}
