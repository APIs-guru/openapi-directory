package shared

type UpdateApplicationRequest struct {
	ApplicationConfigurationUpdate *ApplicationConfigurationUpdate `json:"ApplicationConfigurationUpdate"`
	ApplicationName                string                          `json:"ApplicationName"`
	CloudWatchLoggingOptionUpdates []CloudWatchLoggingOptionUpdate `json:"CloudWatchLoggingOptionUpdates"`
	ConditionalToken               *string                         `json:"ConditionalToken"`
	CurrentApplicationVersionID    *int64                          `json:"CurrentApplicationVersionId"`
	RunConfigurationUpdate         *RunConfigurationUpdate         `json:"RunConfigurationUpdate"`
	ServiceExecutionRoleUpdate     *string                         `json:"ServiceExecutionRoleUpdate"`
}
