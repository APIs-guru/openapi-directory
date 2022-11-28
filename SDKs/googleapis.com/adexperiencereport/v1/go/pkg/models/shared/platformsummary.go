package shared

type PlatformSummaryBetterAdsStatusEnum string

const (
	PlatformSummaryBetterAdsStatusEnumUnknown PlatformSummaryBetterAdsStatusEnum = "UNKNOWN"
	PlatformSummaryBetterAdsStatusEnumPassing PlatformSummaryBetterAdsStatusEnum = "PASSING"
	PlatformSummaryBetterAdsStatusEnumWarning PlatformSummaryBetterAdsStatusEnum = "WARNING"
	PlatformSummaryBetterAdsStatusEnumFailing PlatformSummaryBetterAdsStatusEnum = "FAILING"
)

type PlatformSummaryFilterStatusEnum string

const (
	PlatformSummaryFilterStatusEnumUnknown PlatformSummaryFilterStatusEnum = "UNKNOWN"
	PlatformSummaryFilterStatusEnumOn      PlatformSummaryFilterStatusEnum = "ON"
	PlatformSummaryFilterStatusEnumOff     PlatformSummaryFilterStatusEnum = "OFF"
	PlatformSummaryFilterStatusEnumPaused  PlatformSummaryFilterStatusEnum = "PAUSED"
	PlatformSummaryFilterStatusEnumPending PlatformSummaryFilterStatusEnum = "PENDING"
)

type PlatformSummaryRegionEnum string

const (
	PlatformSummaryRegionEnumRegionUnknown PlatformSummaryRegionEnum = "REGION_UNKNOWN"
	PlatformSummaryRegionEnumRegionA       PlatformSummaryRegionEnum = "REGION_A"
	PlatformSummaryRegionEnumRegionB       PlatformSummaryRegionEnum = "REGION_B"
	PlatformSummaryRegionEnumRegionC       PlatformSummaryRegionEnum = "REGION_C"
)

// PlatformSummary
// A site's Ad Experience Report summary on a single platform.
type PlatformSummary struct {
	BetterAdsStatus *PlatformSummaryBetterAdsStatusEnum `json:"betterAdsStatus,omitempty"`
	EnforcementTime *string                             `json:"enforcementTime,omitempty"`
	FilterStatus    *PlatformSummaryFilterStatusEnum    `json:"filterStatus,omitempty"`
	LastChangeTime  *string                             `json:"lastChangeTime,omitempty"`
	Region          []PlatformSummaryRegionEnum         `json:"region,omitempty"`
	ReportURL       *string                             `json:"reportUrl,omitempty"`
	UnderReview     *bool                               `json:"underReview,omitempty"`
}
