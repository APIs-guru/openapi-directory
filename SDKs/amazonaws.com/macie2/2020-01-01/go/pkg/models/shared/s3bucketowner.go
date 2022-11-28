package shared

// S3BucketOwner
// Provides information about the Amazon Web Services account that owns an S3 bucket.
type S3BucketOwner struct {
	DisplayName *string `json:"displayName,omitempty"`
	ID          *string `json:"id,omitempty"`
}
