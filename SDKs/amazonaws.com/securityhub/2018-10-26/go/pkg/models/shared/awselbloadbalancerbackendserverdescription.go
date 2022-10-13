package shared

type AwsElbLoadBalancerBackendServerDescription struct {
	InstancePort *int64   `json:"InstancePort"`
	PolicyNames  []string `json:"PolicyNames"`
}
