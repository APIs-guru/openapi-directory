package shared

type SearchAllAssignmentsResponse struct {
	Assignments   []Assignment `json:"assignments"`
	NextPageToken *string      `json:"nextPageToken"`
}
