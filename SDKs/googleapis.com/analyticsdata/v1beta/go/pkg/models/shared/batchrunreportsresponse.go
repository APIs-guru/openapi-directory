package shared

// BatchRunReportsResponse
// The batch response containing multiple reports.
type BatchRunReportsResponse struct {
	Kind    *string             `json:"kind,omitempty"`
	Reports []RunReportResponse `json:"reports,omitempty"`
}
