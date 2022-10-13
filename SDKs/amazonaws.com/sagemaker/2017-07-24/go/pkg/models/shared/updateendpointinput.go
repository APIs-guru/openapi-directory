package shared

type UpdateEndpointInput struct {
	DeploymentConfig                 *DeploymentConfig `json:"DeploymentConfig"`
	EndpointConfigName               string            `json:"EndpointConfigName"`
	EndpointName                     string            `json:"EndpointName"`
	ExcludeRetainedVariantProperties []VariantProperty `json:"ExcludeRetainedVariantProperties"`
	RetainAllVariantProperties       *bool             `json:"RetainAllVariantProperties"`
}
