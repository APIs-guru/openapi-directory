package shared

// S3ContentBaseLocationDescription
// The description of the S3 base location that holds the application.
type S3ContentBaseLocationDescription struct {
	BasePath  *string `json:"BasePath,omitempty"`
	BucketArn string  `json:"BucketARN"`
}
