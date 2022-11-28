package shared

// ClassificationExportConfiguration
// Specifies where to store data classification results, and the encryption settings to use when storing results in that location. Currently, you can store classification results only in an S3 bucket.
type ClassificationExportConfiguration struct {
	S3Destination *S3Destination `json:"s3Destination,omitempty"`
}
