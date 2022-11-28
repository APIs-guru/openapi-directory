package shared

// ProcessingS3Output
// Configuration for uploading output data to Amazon S3 from the processing container.
type ProcessingS3Output struct {
	LocalPath    string                     `json:"LocalPath"`
	S3UploadMode ProcessingS3UploadModeEnum `json:"S3UploadMode"`
	S3URI        string                     `json:"S3Uri"`
}
