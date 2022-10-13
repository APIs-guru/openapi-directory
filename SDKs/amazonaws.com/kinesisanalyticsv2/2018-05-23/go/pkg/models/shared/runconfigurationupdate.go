package shared

type RunConfigurationUpdate struct {
	ApplicationRestoreConfiguration *ApplicationRestoreConfiguration `json:"ApplicationRestoreConfiguration"`
	FlinkRunConfiguration           *FlinkRunConfiguration           `json:"FlinkRunConfiguration"`
}
