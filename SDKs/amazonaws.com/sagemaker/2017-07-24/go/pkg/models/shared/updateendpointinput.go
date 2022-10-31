package shared

type UpdateEndpointInput struct {
	DeploymentConfig                 *DeploymentConfig `json:"DeploymentConfig,omitempty"`
	EndpointConfigName               string            `json:"EndpointConfigName"`
	EndpointName                     string            `json:"EndpointName"`
	ExcludeRetainedVariantProperties []VariantProperty `json:"ExcludeRetainedVariantProperties,omitempty"`
	RetainAllVariantProperties       *bool             `json:"RetainAllVariantProperties,omitempty"`
}
