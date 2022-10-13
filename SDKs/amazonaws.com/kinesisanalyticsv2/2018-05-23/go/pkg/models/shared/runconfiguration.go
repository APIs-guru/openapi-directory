package shared

type RunConfiguration struct {
	ApplicationRestoreConfiguration *ApplicationRestoreConfiguration `json:"ApplicationRestoreConfiguration"`
	FlinkRunConfiguration           *FlinkRunConfiguration           `json:"FlinkRunConfiguration"`
	SQLRunConfigurations            []SQLRunConfiguration            `json:"SqlRunConfigurations"`
}
