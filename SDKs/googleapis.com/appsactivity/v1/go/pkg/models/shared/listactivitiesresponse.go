package shared

type ListActivitiesResponse struct {
	Activities    []Activity `json:"activities"`
	NextPageToken *string    `json:"nextPageToken"`
}
