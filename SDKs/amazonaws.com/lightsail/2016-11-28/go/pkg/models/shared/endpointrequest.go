package shared

type EndpointRequest struct {
	ContainerName string                             `json:"containerName"`
	ContainerPort int64                              `json:"containerPort"`
	HealthCheck   *ContainerServiceHealthCheckConfig `json:"healthCheck,omitempty"`
}
