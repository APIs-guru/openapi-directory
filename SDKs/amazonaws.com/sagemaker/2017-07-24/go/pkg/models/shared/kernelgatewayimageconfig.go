package shared



type KernelGatewayImageConfig struct {
    FileSystemConfig *FileSystemConfig `json:"FileSystemConfig,omitempty"`
    KernelSpecs []KernelSpec `json:"KernelSpecs"`
    
}

