package shared

type DescribeRaidArraysRequest struct {
	InstanceID   *string  `json:"InstanceId,omitempty"`
	RaidArrayIds []string `json:"RaidArrayIds,omitempty"`
	StackID      *string  `json:"StackId,omitempty"`
}
