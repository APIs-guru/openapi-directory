package shared

// AwsAPIGatewayV2APIDetails
// Contains information about a version 2 API in Amazon API Gateway.
type AwsAPIGatewayV2APIDetails struct {
	APIEndpoint               *string               `json:"ApiEndpoint,omitempty"`
	APIID                     *string               `json:"ApiId,omitempty"`
	APIKeySelectionExpression *string               `json:"ApiKeySelectionExpression,omitempty"`
	CorsConfiguration         *AwsCorsConfiguration `json:"CorsConfiguration,omitempty"`
	CreatedDate               *string               `json:"CreatedDate,omitempty"`
	Description               *string               `json:"Description,omitempty"`
	Name                      *string               `json:"Name,omitempty"`
	ProtocolType              *string               `json:"ProtocolType,omitempty"`
	RouteSelectionExpression  *string               `json:"RouteSelectionExpression,omitempty"`
	Version                   *string               `json:"Version,omitempty"`
}
