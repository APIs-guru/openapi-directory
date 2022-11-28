package shared

// KernelGatewayImageConfig
// The configuration for the file system and kernels in a SageMaker image running as a KernelGateway app.
type KernelGatewayImageConfig struct {
	FileSystemConfig *FileSystemConfig `json:"FileSystemConfig,omitempty"`
	KernelSpecs      []KernelSpec      `json:"KernelSpecs"`
}
