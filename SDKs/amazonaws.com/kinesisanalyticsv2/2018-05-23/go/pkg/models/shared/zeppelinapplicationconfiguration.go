package shared



type ZeppelinApplicationConfiguration struct {
    CatalogConfiguration *CatalogConfiguration `json:"CatalogConfiguration,omitempty"`
    CustomArtifactsConfiguration []CustomArtifactConfiguration `json:"CustomArtifactsConfiguration,omitempty"`
    DeployAsApplicationConfiguration *DeployAsApplicationConfiguration `json:"DeployAsApplicationConfiguration,omitempty"`
    MonitoringConfiguration *ZeppelinMonitoringConfiguration `json:"MonitoringConfiguration,omitempty"`
    
}

