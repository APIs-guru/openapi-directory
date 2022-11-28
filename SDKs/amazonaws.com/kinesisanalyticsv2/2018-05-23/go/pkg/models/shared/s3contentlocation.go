package shared

// S3ContentLocation
// For a Kinesis Data Analytics application provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.
type S3ContentLocation struct {
	BucketArn     string  `json:"BucketARN"`
	FileKey       string  `json:"FileKey"`
	ObjectVersion *string `json:"ObjectVersion,omitempty"`
}
