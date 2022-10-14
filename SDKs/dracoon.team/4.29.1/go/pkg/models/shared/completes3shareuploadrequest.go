package shared

type CompleteS3ShareUploadRequest struct {
	Parts           []S3FileUploadPart `json:"parts"`
	UserFileKeyList []UserFileKey      `json:"userFileKeyList,omitempty"`
}
