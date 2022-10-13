package shared

type DescribeElasticLoadBalancersRequest struct {
	LayerIds []string `json:"LayerIds"`
	StackID  *string  `json:"StackId"`
}
