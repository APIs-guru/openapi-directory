package shared

type BatchRunPivotReportsResponse struct {
	Kind         *string                  `json:"kind"`
	PivotReports []RunPivotReportResponse `json:"pivotReports"`
}
