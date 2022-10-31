package shared

type ApplicationConfigurationDescription struct {
	ApplicationCodeConfigurationDescription     *ApplicationCodeConfigurationDescription     `json:"ApplicationCodeConfigurationDescription,omitempty"`
	ApplicationSnapshotConfigurationDescription *ApplicationSnapshotConfigurationDescription `json:"ApplicationSnapshotConfigurationDescription,omitempty"`
	EnvironmentPropertyDescriptions             *EnvironmentPropertyDescriptions             `json:"EnvironmentPropertyDescriptions,omitempty"`
	FlinkApplicationConfigurationDescription    *FlinkApplicationConfigurationDescription    `json:"FlinkApplicationConfigurationDescription,omitempty"`
	RunConfigurationDescription                 *RunConfigurationDescription                 `json:"RunConfigurationDescription,omitempty"`
	SQLApplicationConfigurationDescription      *SQLApplicationConfigurationDescription      `json:"SqlApplicationConfigurationDescription,omitempty"`
	VpcConfigurationDescriptions                []VpcConfigurationDescription                `json:"VpcConfigurationDescriptions,omitempty"`
	ZeppelinApplicationConfigurationDescription *ZeppelinApplicationConfigurationDescription `json:"ZeppelinApplicationConfigurationDescription,omitempty"`
}
