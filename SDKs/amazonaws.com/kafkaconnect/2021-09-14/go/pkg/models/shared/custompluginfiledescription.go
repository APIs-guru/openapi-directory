package shared

type CustomPluginFileDescription struct {
	FileMd5  *string `json:"fileMd5,omitempty"`
	FileSize *int64  `json:"fileSize,omitempty"`
}
