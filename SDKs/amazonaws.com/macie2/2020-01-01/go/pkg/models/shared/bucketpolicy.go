package shared

// BucketPolicy
// Provides information about the permissions settings of the bucket policy for an S3 bucket.
type BucketPolicy struct {
	AllowsPublicReadAccess  *bool `json:"allowsPublicReadAccess,omitempty"`
	AllowsPublicWriteAccess *bool `json:"allowsPublicWriteAccess,omitempty"`
}
