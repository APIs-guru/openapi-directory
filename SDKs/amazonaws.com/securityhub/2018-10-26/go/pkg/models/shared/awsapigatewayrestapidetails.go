package shared

// AwsAPIGatewayRestAPIDetails
// Contains information about a REST API in version 1 of Amazon API Gateway.
type AwsAPIGatewayRestAPIDetails struct {
	APIKeySource           *string                             `json:"ApiKeySource,omitempty"`
	BinaryMediaTypes       []string                            `json:"BinaryMediaTypes,omitempty"`
	CreatedDate            *string                             `json:"CreatedDate,omitempty"`
	Description            *string                             `json:"Description,omitempty"`
	EndpointConfiguration  *AwsAPIGatewayEndpointConfiguration `json:"EndpointConfiguration,omitempty"`
	ID                     *string                             `json:"Id,omitempty"`
	MinimumCompressionSize *int64                              `json:"MinimumCompressionSize,omitempty"`
	Name                   *string                             `json:"Name,omitempty"`
	Version                *string                             `json:"Version,omitempty"`
}
