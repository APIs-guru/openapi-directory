package shared

import (
	"time"
)

type GetBucketStatisticsResponse struct {
	BucketCount                              *int64                                           `json:"bucketCount"`
	BucketCountByEffectivePermission         *BucketCountByEffectivePermission                `json:"bucketCountByEffectivePermission"`
	BucketCountByEncryptionType              *BucketCountByEncryptionType                     `json:"bucketCountByEncryptionType"`
	BucketCountByObjectEncryptionRequirement *BucketCountPolicyAllowsUnencryptedObjectUploads `json:"bucketCountByObjectEncryptionRequirement"`
	BucketCountBySharedAccessType            *BucketCountBySharedAccessType                   `json:"bucketCountBySharedAccessType"`
	ClassifiableObjectCount                  *int64                                           `json:"classifiableObjectCount"`
	ClassifiableSizeInBytes                  *int64                                           `json:"classifiableSizeInBytes"`
	LastUpdated                              *time.Time                                       `json:"lastUpdated"`
	ObjectCount                              *int64                                           `json:"objectCount"`
	SizeInBytes                              *int64                                           `json:"sizeInBytes"`
	SizeInBytesCompressed                    *int64                                           `json:"sizeInBytesCompressed"`
	UnclassifiableObjectCount                *ObjectLevelStatistics                           `json:"unclassifiableObjectCount"`
	UnclassifiableObjectSizeInBytes          *ObjectLevelStatistics                           `json:"unclassifiableObjectSizeInBytes"`
}
