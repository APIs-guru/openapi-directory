package shared

// MatchingBucket
// Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes.
type MatchingBucket struct {
	AccountID                       *string                      `json:"accountId,omitempty"`
	BucketName                      *string                      `json:"bucketName,omitempty"`
	ClassifiableObjectCount         *int64                       `json:"classifiableObjectCount,omitempty"`
	ClassifiableSizeInBytes         *int64                       `json:"classifiableSizeInBytes,omitempty"`
	JobDetails                      *JobDetails                  `json:"jobDetails,omitempty"`
	ObjectCount                     *int64                       `json:"objectCount,omitempty"`
	ObjectCountByEncryptionType     *ObjectCountByEncryptionType `json:"objectCountByEncryptionType,omitempty"`
	SizeInBytes                     *int64                       `json:"sizeInBytes,omitempty"`
	SizeInBytesCompressed           *int64                       `json:"sizeInBytesCompressed,omitempty"`
	UnclassifiableObjectCount       *ObjectLevelStatistics       `json:"unclassifiableObjectCount,omitempty"`
	UnclassifiableObjectSizeInBytes *ObjectLevelStatistics       `json:"unclassifiableObjectSizeInBytes,omitempty"`
}
