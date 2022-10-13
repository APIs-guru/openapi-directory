package shared

type CreateApplicationRequest struct {
	ApplicationConfiguration *ApplicationConfiguration `json:"ApplicationConfiguration"`
	ApplicationDescription   *string                   `json:"ApplicationDescription"`
	ApplicationMode          *ApplicationModeEnum      `json:"ApplicationMode"`
	ApplicationName          string                    `json:"ApplicationName"`
	CloudWatchLoggingOptions []CloudWatchLoggingOption `json:"CloudWatchLoggingOptions"`
	RuntimeEnvironment       RuntimeEnvironmentEnum    `json:"RuntimeEnvironment"`
	ServiceExecutionRole     string                    `json:"ServiceExecutionRole"`
	Tags                     []Tag                     `json:"Tags"`
}
