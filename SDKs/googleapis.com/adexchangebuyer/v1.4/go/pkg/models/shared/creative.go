package shared

import (
	"time"
)

type CreativeAdTechnologyProviders struct {
	DetectedProviderIds     []string `json:"detectedProviderIds"`
	HasUnidentifiedProvider *bool    `json:"hasUnidentifiedProvider"`
}

type CreativeCorrectionsContexts struct {
	AuctionType   []string `json:"auctionType"`
	ContextType   *string  `json:"contextType"`
	GeoCriteriaID []int32  `json:"geoCriteriaId"`
	Platform      []string `json:"platform"`
}

type CreativeCorrections struct {
	Contexts []CreativeCorrectionsContexts `json:"contexts"`
	Details  []string                      `json:"details"`
	Reason   *string                       `json:"reason"`
}

type CreativeFilteringReasonsReasons struct {
	FilteringCount  *string `json:"filteringCount"`
	FilteringStatus *int32  `json:"filteringStatus"`
}

type CreativeFilteringReasons struct {
	Date    *string                           `json:"date"`
	Reasons []CreativeFilteringReasonsReasons `json:"reasons"`
}

type CreativeNativeAdAppIcon struct {
	Height *int32  `json:"height"`
	URL    *string `json:"url"`
	Width  *int32  `json:"width"`
}

type CreativeNativeAdImage struct {
	Height *int32  `json:"height"`
	URL    *string `json:"url"`
	Width  *int32  `json:"width"`
}

type CreativeNativeAdLogo struct {
	Height *int32  `json:"height"`
	URL    *string `json:"url"`
	Width  *int32  `json:"width"`
}

type CreativeNativeAd struct {
	Advertiser            *string                  `json:"advertiser"`
	AppIcon               *CreativeNativeAdAppIcon `json:"appIcon"`
	Body                  *string                  `json:"body"`
	CallToAction          *string                  `json:"callToAction"`
	ClickLinkURL          *string                  `json:"clickLinkUrl"`
	ClickTrackingURL      *string                  `json:"clickTrackingUrl"`
	Headline              *string                  `json:"headline"`
	Image                 *CreativeNativeAdImage   `json:"image"`
	ImpressionTrackingURL []string                 `json:"impressionTrackingUrl"`
	Logo                  *CreativeNativeAdLogo    `json:"logo"`
	Price                 *string                  `json:"price"`
	StarRating            *float64                 `json:"starRating"`
	VideoURL              *string                  `json:"videoURL"`
}

type CreativeServingRestrictionsContexts struct {
	AuctionType   []string `json:"auctionType"`
	ContextType   *string  `json:"contextType"`
	GeoCriteriaID []int32  `json:"geoCriteriaId"`
	Platform      []string `json:"platform"`
}

type CreativeServingRestrictionsDisapprovalReasons struct {
	Details []string `json:"details"`
	Reason  *string  `json:"reason"`
}

type CreativeServingRestrictions struct {
	Contexts           []CreativeServingRestrictionsContexts           `json:"contexts"`
	DisapprovalReasons []CreativeServingRestrictionsDisapprovalReasons `json:"disapprovalReasons"`
	Reason             *string                                         `json:"reason"`
}

type Creative struct {
	HTMLSnippet                *string                        `json:"HTMLSnippet"`
	AccountID                  *int32                         `json:"accountId"`
	AdChoicesDestinationURL    *string                        `json:"adChoicesDestinationUrl"`
	AdTechnologyProviders      *CreativeAdTechnologyProviders `json:"adTechnologyProviders"`
	AdvertiserID               []string                       `json:"advertiserId"`
	AdvertiserName             *string                        `json:"advertiserName"`
	AgencyID                   *string                        `json:"agencyId"`
	APIUploadTimestamp         *time.Time                     `json:"apiUploadTimestamp"`
	Attribute                  []int32                        `json:"attribute"`
	BuyerCreativeID            *string                        `json:"buyerCreativeId"`
	ClickThroughURL            []string                       `json:"clickThroughUrl"`
	Corrections                []CreativeCorrections          `json:"corrections"`
	CreativeStatusIdentityType *string                        `json:"creativeStatusIdentityType"`
	DealsStatus                *string                        `json:"dealsStatus"`
	DetectedDomains            []string                       `json:"detectedDomains"`
	FilteringReasons           *CreativeFilteringReasons      `json:"filteringReasons"`
	Height                     *int32                         `json:"height"`
	ImpressionTrackingURL      []string                       `json:"impressionTrackingUrl"`
	Kind                       *string                        `json:"kind"`
	Languages                  []string                       `json:"languages"`
	NativeAd                   *CreativeNativeAd              `json:"nativeAd"`
	OpenAuctionStatus          *string                        `json:"openAuctionStatus"`
	ProductCategories          []int32                        `json:"productCategories"`
	RestrictedCategories       []int32                        `json:"restrictedCategories"`
	SensitiveCategories        []int32                        `json:"sensitiveCategories"`
	ServingRestrictions        []CreativeServingRestrictions  `json:"servingRestrictions"`
	VendorType                 []int32                        `json:"vendorType"`
	Version                    *int32                         `json:"version"`
	VideoURL                   *string                        `json:"videoURL"`
	VideoVastXML               *string                        `json:"videoVastXML"`
	Width                      *int32                         `json:"width"`
}
