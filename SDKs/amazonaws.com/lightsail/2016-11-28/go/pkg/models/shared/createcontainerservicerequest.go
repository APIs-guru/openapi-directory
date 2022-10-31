package shared



type CreateContainerServiceRequest struct {
    Deployment *ContainerServiceDeploymentRequest `json:"deployment,omitempty"`
    Power ContainerServicePowerNameEnum `json:"power"`
    PublicDomainNames map[string][]string `json:"publicDomainNames,omitempty"`
    Scale int64 `json:"scale"`
    ServiceName string `json:"serviceName"`
    Tags []Tag `json:"tags,omitempty"`
    
}

