package shared

type DescribeElasticLoadBalancersRequest struct {
	LayerIds []string `json:"LayerIds,omitempty"`
	StackID  *string  `json:"StackId,omitempty"`
}
