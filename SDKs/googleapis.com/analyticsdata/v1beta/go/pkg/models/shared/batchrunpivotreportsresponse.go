package shared



type BatchRunPivotReportsResponse struct {
    Kind *string `json:"kind,omitempty"`
    PivotReports []RunPivotReportResponse `json:"pivotReports,omitempty"`
    
}

