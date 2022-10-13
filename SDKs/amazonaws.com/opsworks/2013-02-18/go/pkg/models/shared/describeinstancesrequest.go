package shared

type DescribeInstancesRequest struct {
	InstanceIds []string `json:"InstanceIds"`
	LayerID     *string  `json:"LayerId"`
	StackID     *string  `json:"StackId"`
}
