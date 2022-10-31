package shared

type FileInfo struct {
	FileID       *string `json:"fileId,omitempty"`
	FileType     *string `json:"fileType,omitempty"`
	Name         *string `json:"name,omitempty"`
	UploadedDate *string `json:"uploadedDate,omitempty"`
}
