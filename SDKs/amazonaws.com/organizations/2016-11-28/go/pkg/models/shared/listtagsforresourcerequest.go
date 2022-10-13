package shared

type ListTagsForResourceRequest struct {
	NextToken  *string `json:"NextToken"`
	ResourceID string  `json:"ResourceId"`
}
