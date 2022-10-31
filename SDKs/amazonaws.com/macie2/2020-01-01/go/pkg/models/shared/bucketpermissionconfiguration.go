package shared



type BucketPermissionConfiguration struct {
    AccountLevelPermissions *AccountLevelPermissions `json:"accountLevelPermissions,omitempty"`
    BucketLevelPermissions *BucketLevelPermissions `json:"bucketLevelPermissions,omitempty"`
    
}

