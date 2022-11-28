package shared

// S3LocationDescription
// The description of the location of an object in Amazon S3.
type S3LocationDescription struct {
	BucketArn     *string `json:"bucketArn,omitempty"`
	FileKey       *string `json:"fileKey,omitempty"`
	ObjectVersion *string `json:"objectVersion,omitempty"`
}
