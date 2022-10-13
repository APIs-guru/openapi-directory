package shared

type GoogleCloudLocationListLocationsResponse struct {
	Locations     []GoogleCloudLocationLocation `json:"locations"`
	NextPageToken *string                       `json:"nextPageToken"`
}
