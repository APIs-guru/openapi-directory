package shared

type DescribeInstancePatchStatesRequest struct {
	InstanceIds []string `json:"InstanceIds"`
	MaxResults  *int64   `json:"MaxResults"`
	NextToken   *string  `json:"NextToken"`
}
