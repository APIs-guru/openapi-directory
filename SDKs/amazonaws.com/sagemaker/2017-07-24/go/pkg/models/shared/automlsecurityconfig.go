package shared

type AutoMlSecurityConfig struct {
	EnableInterContainerTrafficEncryption *bool      `json:"EnableInterContainerTrafficEncryption"`
	VolumeKmsKeyID                        *string    `json:"VolumeKmsKeyId"`
	VpcConfig                             *VpcConfig `json:"VpcConfig"`
}
