package shared

// RunConfiguration
// Describes the starting parameters for an Kinesis Data Analytics application.
type RunConfiguration struct {
	ApplicationRestoreConfiguration *ApplicationRestoreConfiguration `json:"ApplicationRestoreConfiguration,omitempty"`
	FlinkRunConfiguration           *FlinkRunConfiguration           `json:"FlinkRunConfiguration,omitempty"`
	SQLRunConfigurations            []SQLRunConfiguration            `json:"SqlRunConfigurations,omitempty"`
}
