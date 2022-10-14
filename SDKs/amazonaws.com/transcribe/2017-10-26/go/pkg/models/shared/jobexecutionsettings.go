package shared

type JobExecutionSettings struct {
	AllowDeferredExecution *bool   `json:"AllowDeferredExecution,omitempty"`
	DataAccessRoleArn      *string `json:"DataAccessRoleArn,omitempty"`
}
