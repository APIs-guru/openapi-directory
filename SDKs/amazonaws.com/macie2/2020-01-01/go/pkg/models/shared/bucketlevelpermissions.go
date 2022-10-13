package shared

type BucketLevelPermissions struct {
	AccessControlList *AccessControlList `json:"accessControlList"`
	BlockPublicAccess *BlockPublicAccess `json:"blockPublicAccess"`
	BucketPolicy      *BucketPolicy      `json:"bucketPolicy"`
}
