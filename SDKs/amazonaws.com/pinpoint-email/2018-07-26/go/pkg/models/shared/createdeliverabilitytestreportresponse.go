package shared

// CreateDeliverabilityTestReportResponse
// Information about the predictive inbox placement test that you created.
type CreateDeliverabilityTestReportResponse struct {
	DeliverabilityTestStatus DeliverabilityTestStatusEnum `json:"DeliverabilityTestStatus"`
	ReportID                 string                       `json:"ReportId"`
}
