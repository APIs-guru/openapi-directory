package shared

// MonitoringNetworkConfig
// The networking configuration for the monitoring job.
type MonitoringNetworkConfig struct {
	EnableInterContainerTrafficEncryption *bool      `json:"EnableInterContainerTrafficEncryption,omitempty"`
	EnableNetworkIsolation                *bool      `json:"EnableNetworkIsolation,omitempty"`
	VpcConfig                             *VpcConfig `json:"VpcConfig,omitempty"`
}
