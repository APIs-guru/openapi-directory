package shared

type RunConfiguration struct {
	ApplicationRestoreConfiguration *ApplicationRestoreConfiguration `json:"ApplicationRestoreConfiguration,omitempty"`
	FlinkRunConfiguration           *FlinkRunConfiguration           `json:"FlinkRunConfiguration,omitempty"`
	SQLRunConfigurations            []SQLRunConfiguration            `json:"SqlRunConfigurations,omitempty"`
}
