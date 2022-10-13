package shared

type KernelGatewayImageConfig struct {
	FileSystemConfig *FileSystemConfig `json:"FileSystemConfig"`
	KernelSpecs      []KernelSpec      `json:"KernelSpecs"`
}
