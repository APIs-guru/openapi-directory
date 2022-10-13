package shared

type CreateContainerServiceDeploymentRequest struct {
	Containers     map[string]Container `json:"containers"`
	PublicEndpoint *EndpointRequest     `json:"publicEndpoint"`
	ServiceName    string               `json:"serviceName"`
}
