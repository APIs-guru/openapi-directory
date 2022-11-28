package shared

// RunConfigurationDescription
// Describes the starting properties for a Kinesis Data Analytics application.
type RunConfigurationDescription struct {
	ApplicationRestoreConfigurationDescription *ApplicationRestoreConfiguration `json:"ApplicationRestoreConfigurationDescription,omitempty"`
	FlinkRunConfigurationDescription           *FlinkRunConfiguration           `json:"FlinkRunConfigurationDescription,omitempty"`
}
