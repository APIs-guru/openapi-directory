package shared

// BucketPermissionConfiguration
// Provides information about the account-level and bucket-level permissions settings for an S3 bucket.
type BucketPermissionConfiguration struct {
	AccountLevelPermissions *AccountLevelPermissions `json:"accountLevelPermissions,omitempty"`
	BucketLevelPermissions  *BucketLevelPermissions  `json:"bucketLevelPermissions,omitempty"`
}
