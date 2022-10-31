package shared

type ListStudiosResponse struct {
	NextToken *string  `json:"nextToken,omitempty"`
	Studios   []Studio `json:"studios,omitempty"`
}
