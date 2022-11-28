package shared

// S3ContentBaseLocation
// The S3 bucket that holds the application information.
type S3ContentBaseLocation struct {
	BasePath  *string `json:"BasePath,omitempty"`
	BucketArn string  `json:"BucketARN"`
}
