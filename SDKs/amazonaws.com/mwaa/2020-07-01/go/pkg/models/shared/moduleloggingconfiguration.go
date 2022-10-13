package shared

type ModuleLoggingConfiguration struct {
	CloudWatchLogGroupArn *string           `json:"CloudWatchLogGroupArn"`
	Enabled               *bool             `json:"Enabled"`
	LogLevel              *LoggingLevelEnum `json:"LogLevel"`
}
