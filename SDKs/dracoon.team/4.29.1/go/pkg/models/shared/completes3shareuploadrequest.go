package shared

// CompleteS3ShareUploadRequest
// Request model for completing a S3 file upload
type CompleteS3ShareUploadRequest struct {
	Parts           []S3FileUploadPart `json:"parts"`
	UserFileKeyList []UserFileKey      `json:"userFileKeyList,omitempty"`
}
