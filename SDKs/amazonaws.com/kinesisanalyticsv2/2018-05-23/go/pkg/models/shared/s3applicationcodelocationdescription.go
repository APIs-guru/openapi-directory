package shared

// S3ApplicationCodeLocationDescription
// Describes the location of an application's code stored in an S3 bucket.
type S3ApplicationCodeLocationDescription struct {
	BucketArn     string  `json:"BucketARN"`
	FileKey       string  `json:"FileKey"`
	ObjectVersion *string `json:"ObjectVersion,omitempty"`
}
