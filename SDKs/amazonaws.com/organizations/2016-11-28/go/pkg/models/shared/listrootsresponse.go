package shared

type ListRootsResponse struct {
	NextToken *string `json:"NextToken,omitempty"`
	Roots     []Root  `json:"Roots,omitempty"`
}
