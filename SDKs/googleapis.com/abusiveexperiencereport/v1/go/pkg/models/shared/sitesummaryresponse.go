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

type SiteSummaryResponse struct {
	AbusiveStatus   *SiteSummaryResponseAbusiveStatusEnum `json:"abusiveStatus"`
	EnforcementTime *string                               `json:"enforcementTime"`
	FilterStatus    *SiteSummaryResponseFilterStatusEnum  `json:"filterStatus"`
	LastChangeTime  *string                               `json:"lastChangeTime"`
	ReportURL       *string                               `json:"reportUrl"`
	ReviewedSite    *string                               `json:"reviewedSite"`
	UnderReview     *bool                                 `json:"underReview"`
}
