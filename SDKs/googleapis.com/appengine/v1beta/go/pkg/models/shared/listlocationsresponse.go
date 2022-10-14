package shared

type ListLocationsResponse struct {
	Locations     []Location `json:"locations,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
