package shared

// ListActivitiesResponse
// The response from the list request. Contains a list of activities and a token to retrieve the next page of results.
type ListActivitiesResponse struct {
	Activities    []Activity `json:"activities,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
