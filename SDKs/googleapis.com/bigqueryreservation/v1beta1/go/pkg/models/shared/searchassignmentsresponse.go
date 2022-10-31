package shared

type SearchAssignmentsResponse struct {
	Assignments   []Assignment `json:"assignments,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
