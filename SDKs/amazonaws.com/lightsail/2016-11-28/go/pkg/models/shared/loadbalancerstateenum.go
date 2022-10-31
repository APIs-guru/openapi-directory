package shared

type LoadBalancerStateEnum string

const (
	LoadBalancerStateEnumActive         LoadBalancerStateEnum = "active"
	LoadBalancerStateEnumProvisioning   LoadBalancerStateEnum = "provisioning"
	LoadBalancerStateEnumActiveImpaired LoadBalancerStateEnum = "active_impaired"
	LoadBalancerStateEnumFailed         LoadBalancerStateEnum = "failed"
	LoadBalancerStateEnumUnknown        LoadBalancerStateEnum = "unknown"
)
