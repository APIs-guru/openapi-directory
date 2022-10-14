package shared

type ApigatewayListGatewaysResponse struct {
	Gateways             []ApigatewayGateway `json:"gateways,omitempty"`
	NextPageToken        *string             `json:"nextPageToken,omitempty"`
	UnreachableLocations []string            `json:"unreachableLocations,omitempty"`
}
