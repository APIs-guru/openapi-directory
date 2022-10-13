package shared

type ApplicationConfigurationUpdate struct {
	ApplicationCodeConfigurationUpdate     *ApplicationCodeConfigurationUpdate     `json:"ApplicationCodeConfigurationUpdate"`
	ApplicationSnapshotConfigurationUpdate *ApplicationSnapshotConfigurationUpdate `json:"ApplicationSnapshotConfigurationUpdate"`
	EnvironmentPropertyUpdates             *EnvironmentPropertyUpdates             `json:"EnvironmentPropertyUpdates"`
	FlinkApplicationConfigurationUpdate    *FlinkApplicationConfigurationUpdate    `json:"FlinkApplicationConfigurationUpdate"`
	SQLApplicationConfigurationUpdate      *SQLApplicationConfigurationUpdate      `json:"SqlApplicationConfigurationUpdate"`
	VpcConfigurationUpdates                []VpcConfigurationUpdate                `json:"VpcConfigurationUpdates"`
	ZeppelinApplicationConfigurationUpdate *ZeppelinApplicationConfigurationUpdate `json:"ZeppelinApplicationConfigurationUpdate"`
}
