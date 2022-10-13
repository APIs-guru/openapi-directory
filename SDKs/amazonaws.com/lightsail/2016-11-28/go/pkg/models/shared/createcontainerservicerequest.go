package shared

type CreateContainerServiceRequest struct {
	Deployment        *ContainerServiceDeploymentRequest `json:"deployment"`
	Power             ContainerServicePowerNameEnum      `json:"power"`
	PublicDomainNames map[string][]string                `json:"publicDomainNames"`
	Scale             int64                              `json:"scale"`
	ServiceName       string                             `json:"serviceName"`
	Tags              []Tag                              `json:"tags"`
}
