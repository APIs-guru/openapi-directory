package shared

type ListAssignmentsResponse struct {
	Assignments   []Assignment `json:"assignments"`
	NextPageToken *string      `json:"nextPageToken"`
}
