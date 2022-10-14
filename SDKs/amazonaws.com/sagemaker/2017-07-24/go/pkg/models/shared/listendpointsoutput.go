package shared

type ListEndpointsOutput struct {
	Endpoints []EndpointSummary `json:"Endpoints"`
	NextToken *string           `json:"NextToken,omitempty"`
}
