package shared

type FileSystemConfig struct {
	DefaultGid *int64  `json:"DefaultGid"`
	DefaultUID *int64  `json:"DefaultUid"`
	MountPath  *string `json:"MountPath"`
}
