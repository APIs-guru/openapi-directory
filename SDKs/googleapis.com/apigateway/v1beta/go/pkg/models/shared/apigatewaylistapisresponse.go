package shared

// ApigatewayListApisResponse
// Response message for ApiGatewayService.ListApis
type ApigatewayListApisResponse struct {
	Apis                 []ApigatewayAPI `json:"apis,omitempty"`
	NextPageToken        *string         `json:"nextPageToken,omitempty"`
	UnreachableLocations []string        `json:"unreachableLocations,omitempty"`
}
