package shared

// ApigatewayListLocationsResponse
// The response message for Locations.ListLocations.
type ApigatewayListLocationsResponse struct {
	Locations     []ApigatewayLocation `json:"locations,omitempty"`
	NextPageToken *string              `json:"nextPageToken,omitempty"`
}
