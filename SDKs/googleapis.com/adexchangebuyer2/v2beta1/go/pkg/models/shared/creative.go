package shared

type CreativeAttributesEnum string

const (
	CreativeAttributesEnumAttributeUnspecified                CreativeAttributesEnum = "ATTRIBUTE_UNSPECIFIED"
	CreativeAttributesEnumImageRichMedia                      CreativeAttributesEnum = "IMAGE_RICH_MEDIA"
	CreativeAttributesEnumAdobeFlashFlv                       CreativeAttributesEnum = "ADOBE_FLASH_FLV"
	CreativeAttributesEnumIsTagged                            CreativeAttributesEnum = "IS_TAGGED"
	CreativeAttributesEnumIsCookieTargeted                    CreativeAttributesEnum = "IS_COOKIE_TARGETED"
	CreativeAttributesEnumIsUserInterestTargeted              CreativeAttributesEnum = "IS_USER_INTEREST_TARGETED"
	CreativeAttributesEnumExpandingDirectionNone              CreativeAttributesEnum = "EXPANDING_DIRECTION_NONE"
	CreativeAttributesEnumExpandingDirectionUp                CreativeAttributesEnum = "EXPANDING_DIRECTION_UP"
	CreativeAttributesEnumExpandingDirectionDown              CreativeAttributesEnum = "EXPANDING_DIRECTION_DOWN"
	CreativeAttributesEnumExpandingDirectionLeft              CreativeAttributesEnum = "EXPANDING_DIRECTION_LEFT"
	CreativeAttributesEnumExpandingDirectionRight             CreativeAttributesEnum = "EXPANDING_DIRECTION_RIGHT"
	CreativeAttributesEnumExpandingDirectionUpLeft            CreativeAttributesEnum = "EXPANDING_DIRECTION_UP_LEFT"
	CreativeAttributesEnumExpandingDirectionUpRight           CreativeAttributesEnum = "EXPANDING_DIRECTION_UP_RIGHT"
	CreativeAttributesEnumExpandingDirectionDownLeft          CreativeAttributesEnum = "EXPANDING_DIRECTION_DOWN_LEFT"
	CreativeAttributesEnumExpandingDirectionDownRight         CreativeAttributesEnum = "EXPANDING_DIRECTION_DOWN_RIGHT"
	CreativeAttributesEnumCreativeTypeHTML                    CreativeAttributesEnum = "CREATIVE_TYPE_HTML"
	CreativeAttributesEnumCreativeTypeVastVideo               CreativeAttributesEnum = "CREATIVE_TYPE_VAST_VIDEO"
	CreativeAttributesEnumExpandingDirectionUpOrDown          CreativeAttributesEnum = "EXPANDING_DIRECTION_UP_OR_DOWN"
	CreativeAttributesEnumExpandingDirectionLeftOrRight       CreativeAttributesEnum = "EXPANDING_DIRECTION_LEFT_OR_RIGHT"
	CreativeAttributesEnumExpandingDirectionAnyDiagonal       CreativeAttributesEnum = "EXPANDING_DIRECTION_ANY_DIAGONAL"
	CreativeAttributesEnumExpandingActionRolloverToExpand     CreativeAttributesEnum = "EXPANDING_ACTION_ROLLOVER_TO_EXPAND"
	CreativeAttributesEnumInstreamVastVideoTypeVpaidFlash     CreativeAttributesEnum = "INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH"
	CreativeAttributesEnumRichMediaCapabilityTypeMraid        CreativeAttributesEnum = "RICH_MEDIA_CAPABILITY_TYPE_MRAID"
	CreativeAttributesEnumRichMediaCapabilityTypeFlash        CreativeAttributesEnum = "RICH_MEDIA_CAPABILITY_TYPE_FLASH"
	CreativeAttributesEnumRichMediaCapabilityTypeHtml5        CreativeAttributesEnum = "RICH_MEDIA_CAPABILITY_TYPE_HTML5"
	CreativeAttributesEnumSkippableInstreamVideo              CreativeAttributesEnum = "SKIPPABLE_INSTREAM_VIDEO"
	CreativeAttributesEnumRichMediaCapabilityTypeSsl          CreativeAttributesEnum = "RICH_MEDIA_CAPABILITY_TYPE_SSL"
	CreativeAttributesEnumRichMediaCapabilityTypeNonSsl       CreativeAttributesEnum = "RICH_MEDIA_CAPABILITY_TYPE_NON_SSL"
	CreativeAttributesEnumRichMediaCapabilityTypeInterstitial CreativeAttributesEnum = "RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL"
	CreativeAttributesEnumNonSkippableInstreamVideo           CreativeAttributesEnum = "NON_SKIPPABLE_INSTREAM_VIDEO"
	CreativeAttributesEnumNativeEligibilityEligible           CreativeAttributesEnum = "NATIVE_ELIGIBILITY_ELIGIBLE"
	CreativeAttributesEnumNonVpaid                            CreativeAttributesEnum = "NON_VPAID"
	CreativeAttributesEnumNativeEligibilityNotEligible        CreativeAttributesEnum = "NATIVE_ELIGIBILITY_NOT_ELIGIBLE"
	CreativeAttributesEnumAnyInterstitial                     CreativeAttributesEnum = "ANY_INTERSTITIAL"
	CreativeAttributesEnumNonInterstitial                     CreativeAttributesEnum = "NON_INTERSTITIAL"
	CreativeAttributesEnumInBannerVideo                       CreativeAttributesEnum = "IN_BANNER_VIDEO"
	CreativeAttributesEnumRenderingSizelessAdx                CreativeAttributesEnum = "RENDERING_SIZELESS_ADX"
	CreativeAttributesEnumOmsdk10                             CreativeAttributesEnum = "OMSDK_1_0"
)

type CreativeDealsStatusEnum string

const (
	CreativeDealsStatusEnumStatusUnspecified     CreativeDealsStatusEnum = "STATUS_UNSPECIFIED"
	CreativeDealsStatusEnumNotChecked            CreativeDealsStatusEnum = "NOT_CHECKED"
	CreativeDealsStatusEnumConditionallyApproved CreativeDealsStatusEnum = "CONDITIONALLY_APPROVED"
	CreativeDealsStatusEnumApproved              CreativeDealsStatusEnum = "APPROVED"
	CreativeDealsStatusEnumDisapproved           CreativeDealsStatusEnum = "DISAPPROVED"
	CreativeDealsStatusEnumPendingReview         CreativeDealsStatusEnum = "PENDING_REVIEW"
	CreativeDealsStatusEnumStatusTypeUnspecified CreativeDealsStatusEnum = "STATUS_TYPE_UNSPECIFIED"
)

type CreativeOpenAuctionStatusEnum string

const (
	CreativeOpenAuctionStatusEnumStatusUnspecified     CreativeOpenAuctionStatusEnum = "STATUS_UNSPECIFIED"
	CreativeOpenAuctionStatusEnumNotChecked            CreativeOpenAuctionStatusEnum = "NOT_CHECKED"
	CreativeOpenAuctionStatusEnumConditionallyApproved CreativeOpenAuctionStatusEnum = "CONDITIONALLY_APPROVED"
	CreativeOpenAuctionStatusEnumApproved              CreativeOpenAuctionStatusEnum = "APPROVED"
	CreativeOpenAuctionStatusEnumDisapproved           CreativeOpenAuctionStatusEnum = "DISAPPROVED"
	CreativeOpenAuctionStatusEnumPendingReview         CreativeOpenAuctionStatusEnum = "PENDING_REVIEW"
	CreativeOpenAuctionStatusEnumStatusTypeUnspecified CreativeOpenAuctionStatusEnum = "STATUS_TYPE_UNSPECIFIED"
)

type CreativeRestrictedCategoriesEnum string

const (
	CreativeRestrictedCategoriesEnumNoRestrictedCategories CreativeRestrictedCategoriesEnum = "NO_RESTRICTED_CATEGORIES"
	CreativeRestrictedCategoriesEnumAlcohol                CreativeRestrictedCategoriesEnum = "ALCOHOL"
)

type Creative struct {
	AccountID                   *string                            `json:"accountId,omitempty"`
	AdChoicesDestinationURL     *string                            `json:"adChoicesDestinationUrl,omitempty"`
	AdTechnologyProviders       *AdTechnologyProviders             `json:"adTechnologyProviders,omitempty"`
	AdvertiserName              *string                            `json:"advertiserName,omitempty"`
	AgencyID                    *string                            `json:"agencyId,omitempty"`
	APIUpdateTime               *string                            `json:"apiUpdateTime,omitempty"`
	Attributes                  []CreativeAttributesEnum           `json:"attributes,omitempty"`
	ClickThroughUrls            []string                           `json:"clickThroughUrls,omitempty"`
	Corrections                 []Correction                       `json:"corrections,omitempty"`
	CreativeID                  *string                            `json:"creativeId,omitempty"`
	DealsStatus                 *CreativeDealsStatusEnum           `json:"dealsStatus,omitempty"`
	DeclaredClickThroughUrls    []string                           `json:"declaredClickThroughUrls,omitempty"`
	DetectedAdvertiserIds       []string                           `json:"detectedAdvertiserIds,omitempty"`
	DetectedDomains             []string                           `json:"detectedDomains,omitempty"`
	DetectedLanguages           []string                           `json:"detectedLanguages,omitempty"`
	DetectedProductCategories   []int32                            `json:"detectedProductCategories,omitempty"`
	DetectedSensitiveCategories []int32                            `json:"detectedSensitiveCategories,omitempty"`
	HTML                        *HTMLContent                       `json:"html,omitempty"`
	ImpressionTrackingUrls      []string                           `json:"impressionTrackingUrls,omitempty"`
	Native                      *NativeContent                     `json:"native,omitempty"`
	OpenAuctionStatus           *CreativeOpenAuctionStatusEnum     `json:"openAuctionStatus,omitempty"`
	RestrictedCategories        []CreativeRestrictedCategoriesEnum `json:"restrictedCategories,omitempty"`
	ServingRestrictions         []ServingRestriction               `json:"servingRestrictions,omitempty"`
	VendorIds                   []int32                            `json:"vendorIds,omitempty"`
	Version                     *int32                             `json:"version,omitempty"`
	Video                       *VideoContent                      `json:"video,omitempty"`
}
