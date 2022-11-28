package shared

// AutoMlSecurityConfig
// Security options.
type AutoMlSecurityConfig struct {
	EnableInterContainerTrafficEncryption *bool      `json:"EnableInterContainerTrafficEncryption,omitempty"`
	VolumeKmsKeyID                        *string    `json:"VolumeKmsKeyId,omitempty"`
	VpcConfig                             *VpcConfig `json:"VpcConfig,omitempty"`
}
