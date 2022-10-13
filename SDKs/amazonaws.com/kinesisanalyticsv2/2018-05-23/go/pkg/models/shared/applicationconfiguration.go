package shared

type ApplicationConfiguration struct {
	ApplicationCodeConfiguration     *ApplicationCodeConfiguration     `json:"ApplicationCodeConfiguration"`
	ApplicationSnapshotConfiguration *ApplicationSnapshotConfiguration `json:"ApplicationSnapshotConfiguration"`
	EnvironmentProperties            *EnvironmentProperties            `json:"EnvironmentProperties"`
	FlinkApplicationConfiguration    *FlinkApplicationConfiguration    `json:"FlinkApplicationConfiguration"`
	SQLApplicationConfiguration      *SQLApplicationConfiguration      `json:"SqlApplicationConfiguration"`
	VpcConfigurations                []VpcConfiguration                `json:"VpcConfigurations"`
	ZeppelinApplicationConfiguration *ZeppelinApplicationConfiguration `json:"ZeppelinApplicationConfiguration"`
}
