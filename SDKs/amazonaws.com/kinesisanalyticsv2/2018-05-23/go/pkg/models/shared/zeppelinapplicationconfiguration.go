package shared

type ZeppelinApplicationConfiguration struct {
	CatalogConfiguration             *CatalogConfiguration             `json:"CatalogConfiguration"`
	CustomArtifactsConfiguration     []CustomArtifactConfiguration     `json:"CustomArtifactsConfiguration"`
	DeployAsApplicationConfiguration *DeployAsApplicationConfiguration `json:"DeployAsApplicationConfiguration"`
	MonitoringConfiguration          *ZeppelinMonitoringConfiguration  `json:"MonitoringConfiguration"`
}
