package shared

// ApigatewayListGatewaysResponse
// Response message for ApiGatewayService.ListGateways
type ApigatewayListGatewaysResponse struct {
	Gateways             []ApigatewayGateway `json:"gateways,omitempty"`
	NextPageToken        *string             `json:"nextPageToken,omitempty"`
	UnreachableLocations []string            `json:"unreachableLocations,omitempty"`
}
