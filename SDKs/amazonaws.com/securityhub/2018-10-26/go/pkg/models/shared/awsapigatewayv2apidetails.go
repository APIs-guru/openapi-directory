package shared

type AwsAPIGatewayV2APIDetails struct {
	APIEndpoint               *string               `json:"ApiEndpoint"`
	APIID                     *string               `json:"ApiId"`
	APIKeySelectionExpression *string               `json:"ApiKeySelectionExpression"`
	CorsConfiguration         *AwsCorsConfiguration `json:"CorsConfiguration"`
	CreatedDate               *string               `json:"CreatedDate"`
	Description               *string               `json:"Description"`
	Name                      *string               `json:"Name"`
	ProtocolType              *string               `json:"ProtocolType"`
	RouteSelectionExpression  *string               `json:"RouteSelectionExpression"`
	Version                   *string               `json:"Version"`
}
