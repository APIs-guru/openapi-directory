package shared

type ListTagsForResourceRequest struct {
	Arn        string  `json:"Arn"`
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
}
