package shared

type RunConfigurationDescription struct {
	ApplicationRestoreConfigurationDescription *ApplicationRestoreConfiguration `json:"ApplicationRestoreConfigurationDescription"`
	FlinkRunConfigurationDescription           *FlinkRunConfiguration           `json:"FlinkRunConfigurationDescription"`
}
