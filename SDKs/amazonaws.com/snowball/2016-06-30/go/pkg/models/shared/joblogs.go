package shared

type JobLogs struct {
	JobCompletionReportURI *string `json:"JobCompletionReportURI"`
	JobFailureLogURI       *string `json:"JobFailureLogURI"`
	JobSuccessLogURI       *string `json:"JobSuccessLogURI"`
}
