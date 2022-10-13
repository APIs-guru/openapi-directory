package shared

type NetworkConfig struct {
	EnableInterContainerTrafficEncryption *bool      `json:"EnableInterContainerTrafficEncryption"`
	EnableNetworkIsolation                *bool      `json:"EnableNetworkIsolation"`
	VpcConfig                             *VpcConfig `json:"VpcConfig"`
}
