package shared

type DescribeInstancePatchStatesRequest struct {
	InstanceIds []string `json:"InstanceIds"`
	MaxResults  *int64   `json:"MaxResults,omitempty"`
	NextToken   *string  `json:"NextToken,omitempty"`
}
