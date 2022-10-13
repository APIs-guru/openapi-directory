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

type PlatformSummary struct {
	BetterAdsStatus *PlatformSummaryBetterAdsStatusEnum `json:"betterAdsStatus"`
	EnforcementTime *string                             `json:"enforcementTime"`
	FilterStatus    *PlatformSummaryFilterStatusEnum    `json:"filterStatus"`
	LastChangeTime  *string                             `json:"lastChangeTime"`
	Region          []PlatformSummaryRegionEnum         `json:"region"`
	ReportURL       *string                             `json:"reportUrl"`
	UnderReview     *bool                               `json:"underReview"`
}
