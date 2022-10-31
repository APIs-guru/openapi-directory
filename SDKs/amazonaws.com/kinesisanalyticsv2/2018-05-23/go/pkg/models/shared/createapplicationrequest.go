package shared

type CreateApplicationRequest struct {
	ApplicationConfiguration *ApplicationConfiguration `json:"ApplicationConfiguration,omitempty"`
	ApplicationDescription   *string                   `json:"ApplicationDescription,omitempty"`
	ApplicationMode          *ApplicationModeEnum      `json:"ApplicationMode,omitempty"`
	ApplicationName          string                    `json:"ApplicationName"`
	CloudWatchLoggingOptions []CloudWatchLoggingOption `json:"CloudWatchLoggingOptions,omitempty"`
	RuntimeEnvironment       RuntimeEnvironmentEnum    `json:"RuntimeEnvironment"`
	ServiceExecutionRole     string                    `json:"ServiceExecutionRole"`
	Tags                     []Tag                     `json:"Tags,omitempty"`
}
