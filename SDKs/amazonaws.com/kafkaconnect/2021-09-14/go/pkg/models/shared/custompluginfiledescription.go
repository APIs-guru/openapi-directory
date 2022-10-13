package shared

type CustomPluginFileDescription struct {
	FileMd5  *string `json:"fileMd5"`
	FileSize *int64  `json:"fileSize"`
}
