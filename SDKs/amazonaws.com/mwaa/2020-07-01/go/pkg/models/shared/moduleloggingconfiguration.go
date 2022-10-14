package shared

type ModuleLoggingConfiguration struct {
	CloudWatchLogGroupArn *string           `json:"CloudWatchLogGroupArn,omitempty"`
	Enabled               *bool             `json:"Enabled,omitempty"`
	LogLevel              *LoggingLevelEnum `json:"LogLevel,omitempty"`
}
