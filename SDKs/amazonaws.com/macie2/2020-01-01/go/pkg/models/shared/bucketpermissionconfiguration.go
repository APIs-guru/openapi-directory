package shared

type BucketPermissionConfiguration struct {
	AccountLevelPermissions *AccountLevelPermissions `json:"accountLevelPermissions"`
	BucketLevelPermissions  *BucketLevelPermissions  `json:"bucketLevelPermissions"`
}
