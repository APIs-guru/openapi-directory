package shared

type JobExecutionSettings struct {
	AllowDeferredExecution *bool   `json:"AllowDeferredExecution"`
	DataAccessRoleArn      *string `json:"DataAccessRoleArn"`
}
