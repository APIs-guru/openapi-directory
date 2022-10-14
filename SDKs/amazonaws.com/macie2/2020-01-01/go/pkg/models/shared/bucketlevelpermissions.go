package shared

type BucketLevelPermissions struct {
	AccessControlList *AccessControlList `json:"accessControlList,omitempty"`
	BlockPublicAccess *BlockPublicAccess `json:"blockPublicAccess,omitempty"`
	BucketPolicy      *BucketPolicy      `json:"bucketPolicy,omitempty"`
}
