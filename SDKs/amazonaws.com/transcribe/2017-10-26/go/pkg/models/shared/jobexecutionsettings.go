package shared

// JobExecutionSettings
// Provides information about when a transcription job should be executed.
type JobExecutionSettings struct {
	AllowDeferredExecution *bool   `json:"AllowDeferredExecution,omitempty"`
	DataAccessRoleArn      *string `json:"DataAccessRoleArn,omitempty"`
}
