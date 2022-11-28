package shared

// S3DestinationConfiguration
// A complex type that describes an S3 location where recorded videos will be stored.
type S3DestinationConfiguration struct {
	BucketName string `json:"bucketName"`
}
