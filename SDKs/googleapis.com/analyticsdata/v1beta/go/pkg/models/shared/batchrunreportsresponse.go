package shared



type BatchRunReportsResponse struct {
    Kind *string `json:"kind,omitempty"`
    Reports []RunReportResponse `json:"reports,omitempty"`
    
}

