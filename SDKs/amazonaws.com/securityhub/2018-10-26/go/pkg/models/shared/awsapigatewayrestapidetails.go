package shared

type AwsAPIGatewayRestAPIDetails struct {
	APIKeySource           *string                             `json:"ApiKeySource"`
	BinaryMediaTypes       []string                            `json:"BinaryMediaTypes"`
	CreatedDate            *string                             `json:"CreatedDate"`
	Description            *string                             `json:"Description"`
	EndpointConfiguration  *AwsAPIGatewayEndpointConfiguration `json:"EndpointConfiguration"`
	ID                     *string                             `json:"Id"`
	MinimumCompressionSize *int64                              `json:"MinimumCompressionSize"`
	Name                   *string                             `json:"Name"`
	Version                *string                             `json:"Version"`
}
