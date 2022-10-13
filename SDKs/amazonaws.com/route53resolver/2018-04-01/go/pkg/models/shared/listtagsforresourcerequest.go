package shared

type ListTagsForResourceRequest struct {
	MaxResults  *int64  `json:"MaxResults"`
	NextToken   *string `json:"NextToken"`
	ResourceArn string  `json:"ResourceArn"`
}
