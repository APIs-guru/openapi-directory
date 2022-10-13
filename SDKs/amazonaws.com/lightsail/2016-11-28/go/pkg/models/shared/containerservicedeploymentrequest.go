package shared

type ContainerServiceDeploymentRequest struct {
	Containers     map[string]Container `json:"containers"`
	PublicEndpoint *EndpointRequest     `json:"publicEndpoint"`
}
