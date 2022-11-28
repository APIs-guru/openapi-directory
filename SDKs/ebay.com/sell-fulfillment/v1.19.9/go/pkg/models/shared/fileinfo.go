package shared

// FileInfo
// This type is used by the files array, which shows the name, ID, file type, and upload date for each provided evidential file.
type FileInfo struct {
	FileID       *string `json:"fileId,omitempty"`
	FileType     *string `json:"fileType,omitempty"`
	Name         *string `json:"name,omitempty"`
	UploadedDate *string `json:"uploadedDate,omitempty"`
}
