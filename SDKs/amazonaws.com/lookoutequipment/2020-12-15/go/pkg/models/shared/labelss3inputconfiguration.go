package shared

// LabelsS3InputConfiguration
// The location information (prefix and bucket name) for the s3 location being used for label data.
type LabelsS3InputConfiguration struct {
	Bucket string  `json:"Bucket"`
	Prefix *string `json:"Prefix,omitempty"`
}
