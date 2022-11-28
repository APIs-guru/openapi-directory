package shared

// ZeppelinApplicationConfigurationDescription
// The configuration of a Kinesis Data Analytics Studio notebook.
type ZeppelinApplicationConfigurationDescription struct {
	CatalogConfigurationDescription             *CatalogConfigurationDescription             `json:"CatalogConfigurationDescription,omitempty"`
	CustomArtifactsConfigurationDescription     []CustomArtifactConfigurationDescription     `json:"CustomArtifactsConfigurationDescription,omitempty"`
	DeployAsApplicationConfigurationDescription *DeployAsApplicationConfigurationDescription `json:"DeployAsApplicationConfigurationDescription,omitempty"`
	MonitoringConfigurationDescription          ZeppelinMonitoringConfigurationDescription   `json:"MonitoringConfigurationDescription"`
}
