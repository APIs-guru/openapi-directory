package shared

type NetworkConfig struct {
	EnableInterContainerTrafficEncryption *bool      `json:"EnableInterContainerTrafficEncryption,omitempty"`
	EnableNetworkIsolation                *bool      `json:"EnableNetworkIsolation,omitempty"`
	VpcConfig                             *VpcConfig `json:"VpcConfig,omitempty"`
}
