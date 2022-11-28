package shared

type SiteSummaryResponseAbusiveStatusEnum string

const (
	SiteSummaryResponseAbusiveStatusEnumUnknown SiteSummaryResponseAbusiveStatusEnum = "UNKNOWN"
	SiteSummaryResponseAbusiveStatusEnumPassing SiteSummaryResponseAbusiveStatusEnum = "PASSING"
	SiteSummaryResponseAbusiveStatusEnumFailing SiteSummaryResponseAbusiveStatusEnum = "FAILING"
)

type SiteSummaryResponseFilterStatusEnum string

const (
	SiteSummaryResponseFilterStatusEnumUnknown SiteSummaryResponseFilterStatusEnum = "UNKNOWN"
	SiteSummaryResponseFilterStatusEnumOn      SiteSummaryResponseFilterStatusEnum = "ON"
	SiteSummaryResponseFilterStatusEnumOff     SiteSummaryResponseFilterStatusEnum = "OFF"
	SiteSummaryResponseFilterStatusEnumPaused  SiteSummaryResponseFilterStatusEnum = "PAUSED"
	SiteSummaryResponseFilterStatusEnumPending SiteSummaryResponseFilterStatusEnum = "PENDING"
)

// SiteSummaryResponse
// Response message for GetSiteSummary.
type SiteSummaryResponse struct {
	AbusiveStatus   *SiteSummaryResponseAbusiveStatusEnum `json:"abusiveStatus,omitempty"`
	EnforcementTime *string                               `json:"enforcementTime,omitempty"`
	FilterStatus    *SiteSummaryResponseFilterStatusEnum  `json:"filterStatus,omitempty"`
	LastChangeTime  *string                               `json:"lastChangeTime,omitempty"`
	ReportURL       *string                               `json:"reportUrl,omitempty"`
	ReviewedSite    *string                               `json:"reviewedSite,omitempty"`
	UnderReview     *bool                                 `json:"underReview,omitempty"`
}
