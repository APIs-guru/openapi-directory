package shared

type CreateDeliverabilityTestReportResponse struct {
	DeliverabilityTestStatus DeliverabilityTestStatusEnum `json:"DeliverabilityTestStatus"`
	ReportID                 string                       `json:"ReportId"`
}
