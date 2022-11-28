package shared

// S3Location
// The location of an object in Amazon S3.
type S3Location struct {
	BucketArn     string  `json:"bucketArn"`
	FileKey       string  `json:"fileKey"`
	ObjectVersion *string `json:"objectVersion,omitempty"`
}
