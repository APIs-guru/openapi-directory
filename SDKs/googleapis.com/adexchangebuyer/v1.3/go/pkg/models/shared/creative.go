package shared

import (
	"time"
)

type CreativeAdTechnologyProviders struct {
	DetectedProviderIds     []string `json:"detectedProviderIds"`
	HasUnidentifiedProvider *bool    `json:"hasUnidentifiedProvider"`
}

type CreativeCorrections struct {
	Details []string `json:"details"`
	Reason  *string  `json:"reason"`
}

type CreativeDisapprovalReasons struct {
	Details []string `json:"details"`
	Reason  *string  `json:"reason"`
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
	ClickTrackingURL      *string                  `json:"clickTrackingUrl"`
	Headline              *string                  `json:"headline"`
	Image                 *CreativeNativeAdImage   `json:"image"`
	ImpressionTrackingURL []string                 `json:"impressionTrackingUrl"`
	Logo                  *CreativeNativeAdLogo    `json:"logo"`
	Price                 *string                  `json:"price"`
	StarRating            *float64                 `json:"starRating"`
}

type Creative struct {
	HTMLSnippet           *string                        `json:"HTMLSnippet"`
	AccountID             *int32                         `json:"accountId"`
	AdTechnologyProviders *CreativeAdTechnologyProviders `json:"adTechnologyProviders"`
	AdvertiserID          []string                       `json:"advertiserId"`
	AdvertiserName        *string                        `json:"advertiserName"`
	AgencyID              *string                        `json:"agencyId"`
	APIUploadTimestamp    *time.Time                     `json:"apiUploadTimestamp"`
	Attribute             []int32                        `json:"attribute"`
	BuyerCreativeID       *string                        `json:"buyerCreativeId"`
	ClickThroughURL       []string                       `json:"clickThroughUrl"`
	Corrections           []CreativeCorrections          `json:"corrections"`
	DisapprovalReasons    []CreativeDisapprovalReasons   `json:"disapprovalReasons"`
	FilteringReasons      *CreativeFilteringReasons      `json:"filteringReasons"`
	Height                *int32                         `json:"height"`
	ImpressionTrackingURL []string                       `json:"impressionTrackingUrl"`
	Kind                  *string                        `json:"kind"`
	NativeAd              *CreativeNativeAd              `json:"nativeAd"`
	ProductCategories     []int32                        `json:"productCategories"`
	RestrictedCategories  []int32                        `json:"restrictedCategories"`
	SensitiveCategories   []int32                        `json:"sensitiveCategories"`
	Status                *string                        `json:"status"`
	VendorType            []int32                        `json:"vendorType"`
	Version               *int32                         `json:"version"`
	VideoURL              *string                        `json:"videoURL"`
	Width                 *int32                         `json:"width"`
}
