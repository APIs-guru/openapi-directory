package shared

type ContainerServiceEndpoint struct {
	ContainerName *string                            `json:"containerName"`
	ContainerPort *int64                             `json:"containerPort"`
	HealthCheck   *ContainerServiceHealthCheckConfig `json:"healthCheck"`
}
