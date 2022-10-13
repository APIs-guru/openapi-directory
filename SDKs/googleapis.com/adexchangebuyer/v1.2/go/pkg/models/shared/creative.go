package shared

import (
	"time"
)

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

type Creative struct {
	HTMLSnippet           *string                      `json:"HTMLSnippet"`
	AccountID             *int32                       `json:"accountId"`
	AdvertiserID          []string                     `json:"advertiserId"`
	AdvertiserName        *string                      `json:"advertiserName"`
	AgencyID              *string                      `json:"agencyId"`
	APIUploadTimestamp    *time.Time                   `json:"apiUploadTimestamp"`
	Attribute             []int32                      `json:"attribute"`
	BuyerCreativeID       *string                      `json:"buyerCreativeId"`
	ClickThroughURL       []string                     `json:"clickThroughUrl"`
	Corrections           []CreativeCorrections        `json:"corrections"`
	DisapprovalReasons    []CreativeDisapprovalReasons `json:"disapprovalReasons"`
	FilteringReasons      *CreativeFilteringReasons    `json:"filteringReasons"`
	Height                *int32                       `json:"height"`
	ImpressionTrackingURL []string                     `json:"impressionTrackingUrl"`
	Kind                  *string                      `json:"kind"`
	ProductCategories     []int32                      `json:"productCategories"`
	RestrictedCategories  []int32                      `json:"restrictedCategories"`
	SensitiveCategories   []int32                      `json:"sensitiveCategories"`
	Status                *string                      `json:"status"`
	VendorType            []int32                      `json:"vendorType"`
	Version               *int32                       `json:"version"`
	VideoURL              *string                      `json:"videoURL"`
	Width                 *int32                       `json:"width"`
}
