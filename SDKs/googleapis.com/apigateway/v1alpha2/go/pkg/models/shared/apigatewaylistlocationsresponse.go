package shared

type ApigatewayListLocationsResponse struct {
	Locations     []ApigatewayLocation `json:"locations"`
	NextPageToken *string              `json:"nextPageToken"`
}
