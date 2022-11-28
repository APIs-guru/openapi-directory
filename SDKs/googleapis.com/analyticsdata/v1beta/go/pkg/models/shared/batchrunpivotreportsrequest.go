package shared

// BatchRunPivotReportsRequest
// The batch request containing multiple pivot report requests.
type BatchRunPivotReportsRequest struct {
	Requests []RunPivotReportRequest `json:"requests,omitempty"`
}
