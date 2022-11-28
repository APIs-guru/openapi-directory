package shared

// S3FileUploadPart
// S3 file upload part information
type S3FileUploadPart struct {
	PartEtag   string `json:"partEtag"`
	PartNumber int32  `json:"partNumber"`
}
