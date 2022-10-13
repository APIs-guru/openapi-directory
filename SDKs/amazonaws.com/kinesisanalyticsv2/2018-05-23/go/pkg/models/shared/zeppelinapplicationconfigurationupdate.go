package shared

type ZeppelinApplicationConfigurationUpdate struct {
	CatalogConfigurationUpdate             *CatalogConfigurationUpdate             `json:"CatalogConfigurationUpdate"`
	CustomArtifactsConfigurationUpdate     []CustomArtifactConfiguration           `json:"CustomArtifactsConfigurationUpdate"`
	DeployAsApplicationConfigurationUpdate *DeployAsApplicationConfigurationUpdate `json:"DeployAsApplicationConfigurationUpdate"`
	MonitoringConfigurationUpdate          *ZeppelinMonitoringConfigurationUpdate  `json:"MonitoringConfigurationUpdate"`
}
