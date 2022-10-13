package shared

type FileInfo struct {
	FileID       *string `json:"fileId"`
	FileType     *string `json:"fileType"`
	Name         *string `json:"name"`
	UploadedDate *string `json:"uploadedDate"`
}
