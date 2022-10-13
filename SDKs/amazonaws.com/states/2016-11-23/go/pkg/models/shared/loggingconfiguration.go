package shared

type LoggingConfiguration struct {
	Destinations         []LogDestination `json:"destinations"`
	IncludeExecutionData *bool            `json:"includeExecutionData"`
	Level                *LogLevelEnum    `json:"level"`
}
