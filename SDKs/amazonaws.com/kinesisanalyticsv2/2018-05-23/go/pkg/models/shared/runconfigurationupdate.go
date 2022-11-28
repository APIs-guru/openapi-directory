package shared

// RunConfigurationUpdate
// Describes the updates to the starting parameters for a Kinesis Data Analytics application.
type RunConfigurationUpdate struct {
	ApplicationRestoreConfiguration *ApplicationRestoreConfiguration `json:"ApplicationRestoreConfiguration,omitempty"`
	FlinkRunConfiguration           *FlinkRunConfiguration           `json:"FlinkRunConfiguration,omitempty"`
}
