package shared

// NetworkConfig
// Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
type NetworkConfig struct {
	EnableInterContainerTrafficEncryption *bool      `json:"EnableInterContainerTrafficEncryption,omitempty"`
	EnableNetworkIsolation                *bool      `json:"EnableNetworkIsolation,omitempty"`
	VpcConfig                             *VpcConfig `json:"VpcConfig,omitempty"`
}
