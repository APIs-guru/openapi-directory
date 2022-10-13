package shared

type DescribeRaidArraysRequest struct {
	InstanceID   *string  `json:"InstanceId"`
	RaidArrayIds []string `json:"RaidArrayIds"`
	StackID      *string  `json:"StackId"`
}
