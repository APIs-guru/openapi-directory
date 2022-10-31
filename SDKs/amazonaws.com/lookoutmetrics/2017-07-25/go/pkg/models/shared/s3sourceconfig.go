package shared

type S3SourceConfig struct {
	FileFormatDescriptor   *FileFormatDescriptor `json:"FileFormatDescriptor,omitempty"`
	HistoricalDataPathList []string              `json:"HistoricalDataPathList,omitempty"`
	RoleArn                string                `json:"RoleArn"`
	TemplatedPathList      []string              `json:"TemplatedPathList,omitempty"`
}
