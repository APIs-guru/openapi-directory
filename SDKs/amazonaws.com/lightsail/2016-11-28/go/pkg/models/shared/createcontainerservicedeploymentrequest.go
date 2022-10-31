package shared



type CreateContainerServiceDeploymentRequest struct {
    Containers map[string]Container `json:"containers,omitempty"`
    PublicEndpoint *EndpointRequest `json:"publicEndpoint,omitempty"`
    ServiceName string `json:"serviceName"`
    
}

