package shared

type DescribeElasticIpsRequest struct {
	InstanceID *string  `json:"InstanceId,omitempty"`
	Ips        []string `json:"Ips,omitempty"`
	StackID    *string  `json:"StackId,omitempty"`
}
