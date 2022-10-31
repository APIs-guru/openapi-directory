package shared

type ListTagsForResourceRequest struct {
	InstanceArn string  `json:"InstanceArn"`
	NextToken   *string `json:"NextToken,omitempty"`
	ResourceArn string  `json:"ResourceArn"`
}
