package shared

// BatchRunReportsRequest
// The batch request containing multiple report requests.
type BatchRunReportsRequest struct {
	Requests []RunReportRequest `json:"requests,omitempty"`
}
