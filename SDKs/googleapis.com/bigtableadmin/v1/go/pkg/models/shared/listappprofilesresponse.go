package shared

type ListAppProfilesResponse struct {
	AppProfiles     []AppProfile `json:"appProfiles"`
	FailedLocations []string     `json:"failedLocations"`
	NextPageToken   *string      `json:"nextPageToken"`
}
