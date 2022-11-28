package shared

// ContainerServiceEndpoint
// Describes the public endpoint configuration of a deployment of an Amazon Lightsail container service.
type ContainerServiceEndpoint struct {
	ContainerName *string                            `json:"containerName,omitempty"`
	ContainerPort *int64                             `json:"containerPort,omitempty"`
	HealthCheck   *ContainerServiceHealthCheckConfig `json:"healthCheck,omitempty"`
}
