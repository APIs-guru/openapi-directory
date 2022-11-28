package shared

// S3SourceConfig
// Contains information about the configuration of the S3 bucket that contains source files.
type S3SourceConfig struct {
	FileFormatDescriptor   *FileFormatDescriptor `json:"FileFormatDescriptor,omitempty"`
	HistoricalDataPathList []string              `json:"HistoricalDataPathList,omitempty"`
	RoleArn                string                `json:"RoleArn"`
	TemplatedPathList      []string              `json:"TemplatedPathList,omitempty"`
}
