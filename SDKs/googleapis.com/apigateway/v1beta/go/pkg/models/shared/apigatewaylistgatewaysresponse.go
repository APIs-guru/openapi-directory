package shared

type ApigatewayListGatewaysResponse struct {
	Gateways             []ApigatewayGateway `json:"gateways"`
	NextPageToken        *string             `json:"nextPageToken"`
	UnreachableLocations []string            `json:"unreachableLocations"`
}
