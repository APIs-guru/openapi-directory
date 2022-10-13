package shared

type ApigatewayListAPIConfigsResponse struct {
	APIConfigs           []ApigatewayAPIConfig `json:"apiConfigs"`
	NextPageToken        *string               `json:"nextPageToken"`
	UnreachableLocations []string              `json:"unreachableLocations"`
}
