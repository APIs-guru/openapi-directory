package shared

type BatchRunPivotReportsRequest struct {
	Requests []RunPivotReportRequest `json:"requests,omitempty"`
}
