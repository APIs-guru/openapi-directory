package shared

type DescribeElasticIpsRequest struct {
	InstanceID *string  `json:"InstanceId"`
	Ips        []string `json:"Ips"`
	StackID    *string  `json:"StackId"`
}
