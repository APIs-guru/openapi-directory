package shared

type ListTagsForResourceRequest struct {
	InstanceArn string  `json:"InstanceArn"`
	NextToken   *string `json:"NextToken"`
	ResourceArn string  `json:"ResourceArn"`
}
