package shared

type ApigatewayListApisResponse struct {
	Apis                 []ApigatewayAPI `json:"apis"`
	NextPageToken        *string         `json:"nextPageToken"`
	UnreachableLocations []string        `json:"unreachableLocations"`
}
