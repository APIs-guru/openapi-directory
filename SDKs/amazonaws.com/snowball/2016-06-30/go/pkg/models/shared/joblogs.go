package shared



type JobLogs struct {
    JobCompletionReportURI *string `json:"JobCompletionReportURI,omitempty"`
    JobFailureLogURI *string `json:"JobFailureLogURI,omitempty"`
    JobSuccessLogURI *string `json:"JobSuccessLogURI,omitempty"`
    
}

