package shared

// LoggingConfiguration
// The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options.
type LoggingConfiguration struct {
	Destinations         []LogDestination `json:"destinations,omitempty"`
	IncludeExecutionData *bool            `json:"includeExecutionData,omitempty"`
	Level                *LogLevelEnum    `json:"level,omitempty"`
}
