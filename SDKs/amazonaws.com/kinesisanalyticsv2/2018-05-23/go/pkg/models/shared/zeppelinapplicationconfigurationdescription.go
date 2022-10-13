package shared

type ZeppelinApplicationConfigurationDescription struct {
	CatalogConfigurationDescription             *CatalogConfigurationDescription             `json:"CatalogConfigurationDescription"`
	CustomArtifactsConfigurationDescription     []CustomArtifactConfigurationDescription     `json:"CustomArtifactsConfigurationDescription"`
	DeployAsApplicationConfigurationDescription *DeployAsApplicationConfigurationDescription `json:"DeployAsApplicationConfigurationDescription"`
	MonitoringConfigurationDescription          ZeppelinMonitoringConfigurationDescription   `json:"MonitoringConfigurationDescription"`
}
