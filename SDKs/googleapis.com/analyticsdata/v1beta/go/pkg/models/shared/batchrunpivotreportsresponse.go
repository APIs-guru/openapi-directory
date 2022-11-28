package shared

// BatchRunPivotReportsResponse
// The batch response containing multiple pivot reports.
type BatchRunPivotReportsResponse struct {
	Kind         *string                  `json:"kind,omitempty"`
	PivotReports []RunPivotReportResponse `json:"pivotReports,omitempty"`
}
