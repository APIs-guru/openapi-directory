package shared

// S3InputFileLocation
// Specifies the details for the S3 file being copied.
type S3InputFileLocation struct {
	Bucket *string `json:"Bucket,omitempty"`
	Key    *string `json:"Key,omitempty"`
}
