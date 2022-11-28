package shared

// BucketLevelPermissions
// Provides information about the bucket-level permissions settings for an S3 bucket.
type BucketLevelPermissions struct {
	AccessControlList *AccessControlList `json:"accessControlList,omitempty"`
	BlockPublicAccess *BlockPublicAccess `json:"blockPublicAccess,omitempty"`
	BucketPolicy      *BucketPolicy      `json:"bucketPolicy,omitempty"`
}
