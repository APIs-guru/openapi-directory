package shared

type ListStudiosResponse struct {
	NextToken *string  `json:"nextToken"`
	Studios   []Studio `json:"studios"`
}
