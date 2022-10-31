package shared

import (
	"time"
)

type GetBucketStatisticsResponse struct {
	BucketCount                              *int64                                           `json:"bucketCount,omitempty"`
	BucketCountByEffectivePermission         *BucketCountByEffectivePermission                `json:"bucketCountByEffectivePermission,omitempty"`
	BucketCountByEncryptionType              *BucketCountByEncryptionType                     `json:"bucketCountByEncryptionType,omitempty"`
	BucketCountByObjectEncryptionRequirement *BucketCountPolicyAllowsUnencryptedObjectUploads `json:"bucketCountByObjectEncryptionRequirement,omitempty"`
	BucketCountBySharedAccessType            *BucketCountBySharedAccessType                   `json:"bucketCountBySharedAccessType,omitempty"`
	ClassifiableObjectCount                  *int64                                           `json:"classifiableObjectCount,omitempty"`
	ClassifiableSizeInBytes                  *int64                                           `json:"classifiableSizeInBytes,omitempty"`
	LastUpdated                              *time.Time                                       `json:"lastUpdated,omitempty"`
	ObjectCount                              *int64                                           `json:"objectCount,omitempty"`
	SizeInBytes                              *int64                                           `json:"sizeInBytes,omitempty"`
	SizeInBytesCompressed                    *int64                                           `json:"sizeInBytesCompressed,omitempty"`
	UnclassifiableObjectCount                *ObjectLevelStatistics                           `json:"unclassifiableObjectCount,omitempty"`
	UnclassifiableObjectSizeInBytes          *ObjectLevelStatistics                           `json:"unclassifiableObjectSizeInBytes,omitempty"`
}
