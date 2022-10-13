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
	AccountID                   *string                            `json:"accountId"`
	AdChoicesDestinationURL     *string                            `json:"adChoicesDestinationUrl"`
	AdTechnologyProviders       *AdTechnologyProviders             `json:"adTechnologyProviders"`
	AdvertiserName              *string                            `json:"advertiserName"`
	AgencyID                    *string                            `json:"agencyId"`
	APIUpdateTime               *string                            `json:"apiUpdateTime"`
	Attributes                  []CreativeAttributesEnum           `json:"attributes"`
	ClickThroughUrls            []string                           `json:"clickThroughUrls"`
	Corrections                 []Correction                       `json:"corrections"`
	CreativeID                  *string                            `json:"creativeId"`
	DealsStatus                 *CreativeDealsStatusEnum           `json:"dealsStatus"`
	DeclaredClickThroughUrls    []string                           `json:"declaredClickThroughUrls"`
	DetectedAdvertiserIds       []string                           `json:"detectedAdvertiserIds"`
	DetectedDomains             []string                           `json:"detectedDomains"`
	DetectedLanguages           []string                           `json:"detectedLanguages"`
	DetectedProductCategories   []int32                            `json:"detectedProductCategories"`
	DetectedSensitiveCategories []int32                            `json:"detectedSensitiveCategories"`
	HTML                        *HTMLContent                       `json:"html"`
	ImpressionTrackingUrls      []string                           `json:"impressionTrackingUrls"`
	Native                      *NativeContent                     `json:"native"`
	OpenAuctionStatus           *CreativeOpenAuctionStatusEnum     `json:"openAuctionStatus"`
	RestrictedCategories        []CreativeRestrictedCategoriesEnum `json:"restrictedCategories"`
	ServingRestrictions         []ServingRestriction               `json:"servingRestrictions"`
	VendorIds                   []int32                            `json:"vendorIds"`
	Version                     *int32                             `json:"version"`
	Video                       *VideoContent                      `json:"video"`
}
