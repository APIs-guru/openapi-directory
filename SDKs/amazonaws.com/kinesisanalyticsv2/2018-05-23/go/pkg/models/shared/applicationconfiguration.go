package shared

type ApplicationConfiguration struct {
	ApplicationCodeConfiguration     *ApplicationCodeConfiguration     `json:"ApplicationCodeConfiguration,omitempty"`
	ApplicationSnapshotConfiguration *ApplicationSnapshotConfiguration `json:"ApplicationSnapshotConfiguration,omitempty"`
	EnvironmentProperties            *EnvironmentProperties            `json:"EnvironmentProperties,omitempty"`
	FlinkApplicationConfiguration    *FlinkApplicationConfiguration    `json:"FlinkApplicationConfiguration,omitempty"`
	SQLApplicationConfiguration      *SQLApplicationConfiguration      `json:"SqlApplicationConfiguration,omitempty"`
	VpcConfigurations                []VpcConfiguration                `json:"VpcConfigurations,omitempty"`
	ZeppelinApplicationConfiguration *ZeppelinApplicationConfiguration `json:"ZeppelinApplicationConfiguration,omitempty"`
}
