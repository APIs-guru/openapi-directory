package shared

type ListEndpointConfigsOutput struct {
	EndpointConfigs []EndpointConfigSummary `json:"EndpointConfigs"`
	NextToken       *string                 `json:"NextToken,omitempty"`
}
