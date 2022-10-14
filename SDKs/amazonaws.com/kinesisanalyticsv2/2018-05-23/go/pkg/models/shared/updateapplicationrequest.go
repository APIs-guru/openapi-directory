package shared

type UpdateApplicationRequest struct {
	ApplicationConfigurationUpdate *ApplicationConfigurationUpdate `json:"ApplicationConfigurationUpdate,omitempty"`
	ApplicationName                string                          `json:"ApplicationName"`
	CloudWatchLoggingOptionUpdates []CloudWatchLoggingOptionUpdate `json:"CloudWatchLoggingOptionUpdates,omitempty"`
	ConditionalToken               *string                         `json:"ConditionalToken,omitempty"`
	CurrentApplicationVersionID    *int64                          `json:"CurrentApplicationVersionId,omitempty"`
	RunConfigurationUpdate         *RunConfigurationUpdate         `json:"RunConfigurationUpdate,omitempty"`
	ServiceExecutionRoleUpdate     *string                         `json:"ServiceExecutionRoleUpdate,omitempty"`
}
