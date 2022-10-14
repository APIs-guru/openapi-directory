package shared

type ListTagsForResourceRequest struct {
	NextToken  *string `json:"NextToken,omitempty"`
	ResourceID string  `json:"ResourceId"`
}
