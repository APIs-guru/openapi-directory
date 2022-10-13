package shared

type ListRootsResponse struct {
	NextToken *string `json:"NextToken"`
	Roots     []Root  `json:"Roots"`
}
