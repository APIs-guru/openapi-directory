package shared



type BatchRunReportsRequest struct {
    Requests []RunReportRequest `json:"requests,omitempty"`
    
}

