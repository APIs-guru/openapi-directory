package shared

// EndpointRequest
// Describes the settings of a public endpoint for an Amazon Lightsail container service.
type EndpointRequest struct {
	ContainerName string                             `json:"containerName"`
	ContainerPort int64                              `json:"containerPort"`
	HealthCheck   *ContainerServiceHealthCheckConfig `json:"healthCheck,omitempty"`
}
