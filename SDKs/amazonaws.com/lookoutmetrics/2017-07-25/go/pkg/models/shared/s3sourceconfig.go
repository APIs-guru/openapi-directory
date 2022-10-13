package shared

type S3SourceConfig struct {
	FileFormatDescriptor   *FileFormatDescriptor `json:"FileFormatDescriptor"`
	HistoricalDataPathList []string              `json:"HistoricalDataPathList"`
	RoleArn                string                `json:"RoleArn"`
	TemplatedPathList      []string              `json:"TemplatedPathList"`
}
