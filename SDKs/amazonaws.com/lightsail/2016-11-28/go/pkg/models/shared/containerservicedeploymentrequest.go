package shared

// ContainerServiceDeploymentRequest
// <p>Describes a container deployment configuration of an Amazon Lightsail container service.</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p>
type ContainerServiceDeploymentRequest struct {
	Containers     map[string]Container `json:"containers,omitempty"`
	PublicEndpoint *EndpointRequest     `json:"publicEndpoint,omitempty"`
}
