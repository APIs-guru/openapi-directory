package shared



type ZeppelinApplicationConfigurationDescription struct {
    CatalogConfigurationDescription *CatalogConfigurationDescription `json:"CatalogConfigurationDescription,omitempty"`
    CustomArtifactsConfigurationDescription []CustomArtifactConfigurationDescription `json:"CustomArtifactsConfigurationDescription,omitempty"`
    DeployAsApplicationConfigurationDescription *DeployAsApplicationConfigurationDescription `json:"DeployAsApplicationConfigurationDescription,omitempty"`
    MonitoringConfigurationDescription ZeppelinMonitoringConfigurationDescription `json:"MonitoringConfigurationDescription"`
    
}

