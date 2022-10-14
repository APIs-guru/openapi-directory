package shared

type CreateEndpointInput struct {
	EndpointConfigName string `json:"EndpointConfigName"`
	EndpointName       string `json:"EndpointName"`
	Tags               []Tag  `json:"Tags,omitempty"`
}
