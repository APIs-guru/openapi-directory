package shared

type ApplicationConfigurationUpdate struct {
	ApplicationCodeConfigurationUpdate     *ApplicationCodeConfigurationUpdate     `json:"ApplicationCodeConfigurationUpdate,omitempty"`
	ApplicationSnapshotConfigurationUpdate *ApplicationSnapshotConfigurationUpdate `json:"ApplicationSnapshotConfigurationUpdate,omitempty"`
	EnvironmentPropertyUpdates             *EnvironmentPropertyUpdates             `json:"EnvironmentPropertyUpdates,omitempty"`
	FlinkApplicationConfigurationUpdate    *FlinkApplicationConfigurationUpdate    `json:"FlinkApplicationConfigurationUpdate,omitempty"`
	SQLApplicationConfigurationUpdate      *SQLApplicationConfigurationUpdate      `json:"SqlApplicationConfigurationUpdate,omitempty"`
	VpcConfigurationUpdates                []VpcConfigurationUpdate                `json:"VpcConfigurationUpdates,omitempty"`
	ZeppelinApplicationConfigurationUpdate *ZeppelinApplicationConfigurationUpdate `json:"ZeppelinApplicationConfigurationUpdate,omitempty"`
}
