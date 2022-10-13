package shared

type MatchingBucket struct {
	AccountID                       *string                      `json:"accountId"`
	BucketName                      *string                      `json:"bucketName"`
	ClassifiableObjectCount         *int64                       `json:"classifiableObjectCount"`
	ClassifiableSizeInBytes         *int64                       `json:"classifiableSizeInBytes"`
	JobDetails                      *JobDetails                  `json:"jobDetails"`
	ObjectCount                     *int64                       `json:"objectCount"`
	ObjectCountByEncryptionType     *ObjectCountByEncryptionType `json:"objectCountByEncryptionType"`
	SizeInBytes                     *int64                       `json:"sizeInBytes"`
	SizeInBytesCompressed           *int64                       `json:"sizeInBytesCompressed"`
	UnclassifiableObjectCount       *ObjectLevelStatistics       `json:"unclassifiableObjectCount"`
	UnclassifiableObjectSizeInBytes *ObjectLevelStatistics       `json:"unclassifiableObjectSizeInBytes"`
}
