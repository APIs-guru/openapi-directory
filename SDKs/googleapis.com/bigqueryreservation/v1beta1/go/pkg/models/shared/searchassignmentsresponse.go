package shared

type SearchAssignmentsResponse struct {
	Assignments   []Assignment `json:"assignments"`
	NextPageToken *string      `json:"nextPageToken"`
}
