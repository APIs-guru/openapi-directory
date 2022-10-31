package shared

type ContainerServiceDeploymentRequest struct {
	Containers     map[string]Container `json:"containers,omitempty"`
	PublicEndpoint *EndpointRequest     `json:"publicEndpoint,omitempty"`
}
