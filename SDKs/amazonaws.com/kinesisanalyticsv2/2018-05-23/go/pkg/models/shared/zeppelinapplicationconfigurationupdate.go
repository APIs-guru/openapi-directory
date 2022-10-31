package shared



type ZeppelinApplicationConfigurationUpdate struct {
    CatalogConfigurationUpdate *CatalogConfigurationUpdate `json:"CatalogConfigurationUpdate,omitempty"`
    CustomArtifactsConfigurationUpdate []CustomArtifactConfiguration `json:"CustomArtifactsConfigurationUpdate,omitempty"`
    DeployAsApplicationConfigurationUpdate *DeployAsApplicationConfigurationUpdate `json:"DeployAsApplicationConfigurationUpdate,omitempty"`
    MonitoringConfigurationUpdate *ZeppelinMonitoringConfigurationUpdate `json:"MonitoringConfigurationUpdate,omitempty"`
    
}

