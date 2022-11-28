package shared

// FileSystemConfig
// The Amazon Elastic File System (EFS) storage configuration for a SageMaker image.
type FileSystemConfig struct {
	DefaultGid *int64  `json:"DefaultGid,omitempty"`
	DefaultUID *int64  `json:"DefaultUid,omitempty"`
	MountPath  *string `json:"MountPath,omitempty"`
}
