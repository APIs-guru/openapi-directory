package shared

type ListRoutinesResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Routines      []Routine `json:"routines"`
}
