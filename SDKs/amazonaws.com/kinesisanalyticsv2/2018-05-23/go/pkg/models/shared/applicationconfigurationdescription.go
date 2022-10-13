package shared

type ApplicationConfigurationDescription struct {
	ApplicationCodeConfigurationDescription     *ApplicationCodeConfigurationDescription     `json:"ApplicationCodeConfigurationDescription"`
	ApplicationSnapshotConfigurationDescription *ApplicationSnapshotConfigurationDescription `json:"ApplicationSnapshotConfigurationDescription"`
	EnvironmentPropertyDescriptions             *EnvironmentPropertyDescriptions             `json:"EnvironmentPropertyDescriptions"`
	FlinkApplicationConfigurationDescription    *FlinkApplicationConfigurationDescription    `json:"FlinkApplicationConfigurationDescription"`
	RunConfigurationDescription                 *RunConfigurationDescription                 `json:"RunConfigurationDescription"`
	SQLApplicationConfigurationDescription      *SQLApplicationConfigurationDescription      `json:"SqlApplicationConfigurationDescription"`
	VpcConfigurationDescriptions                []VpcConfigurationDescription                `json:"VpcConfigurationDescriptions"`
	ZeppelinApplicationConfigurationDescription *ZeppelinApplicationConfigurationDescription `json:"ZeppelinApplicationConfigurationDescription"`
}
