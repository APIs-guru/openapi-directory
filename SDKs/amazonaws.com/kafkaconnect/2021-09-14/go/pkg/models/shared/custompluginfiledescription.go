package shared

// CustomPluginFileDescription
// Details about a custom plugin file.
type CustomPluginFileDescription struct {
	FileMd5  *string `json:"fileMd5,omitempty"`
	FileSize *int64  `json:"fileSize,omitempty"`
}
