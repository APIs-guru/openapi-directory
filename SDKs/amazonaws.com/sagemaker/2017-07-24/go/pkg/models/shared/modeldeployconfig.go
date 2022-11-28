package shared

// ModelDeployConfig
// Specifies how to generate the endpoint name for an automatic one-click Autopilot model deployment.
type ModelDeployConfig struct {
	AutoGenerateEndpointName *bool   `json:"AutoGenerateEndpointName,omitempty"`
	EndpointName             *string `json:"EndpointName,omitempty"`
}
