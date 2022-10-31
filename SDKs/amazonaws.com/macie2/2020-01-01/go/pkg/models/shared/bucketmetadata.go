package shared

import (
"time")

type BucketMetadata struct {
    AccountID *string `json:"accountId,omitempty"`
    AllowsUnencryptedObjectUploads *AllowsUnencryptedObjectUploadsEnum `json:"allowsUnencryptedObjectUploads,omitempty"`
    BucketArn *string `json:"bucketArn,omitempty"`
    BucketCreatedAt *time.Time `json:"bucketCreatedAt,omitempty"`
    BucketName *string `json:"bucketName,omitempty"`
    ClassifiableObjectCount *int64 `json:"classifiableObjectCount,omitempty"`
    ClassifiableSizeInBytes *int64 `json:"classifiableSizeInBytes,omitempty"`
    JobDetails *JobDetails `json:"jobDetails,omitempty"`
    LastUpdated *time.Time `json:"lastUpdated,omitempty"`
    ObjectCount *int64 `json:"objectCount,omitempty"`
    ObjectCountByEncryptionType *ObjectCountByEncryptionType `json:"objectCountByEncryptionType,omitempty"`
    PublicAccess *BucketPublicAccess `json:"publicAccess,omitempty"`
    Region *string `json:"region,omitempty"`
    ReplicationDetails *ReplicationDetails `json:"replicationDetails,omitempty"`
    ServerSideEncryption *BucketServerSideEncryption `json:"serverSideEncryption,omitempty"`
    SharedAccess *SharedAccessEnum `json:"sharedAccess,omitempty"`
    SizeInBytes *int64 `json:"sizeInBytes,omitempty"`
    SizeInBytesCompressed *int64 `json:"sizeInBytesCompressed,omitempty"`
    Tags []KeyValuePair `json:"tags,omitempty"`
    UnclassifiableObjectCount *ObjectLevelStatistics `json:"unclassifiableObjectCount,omitempty"`
    UnclassifiableObjectSizeInBytes *ObjectLevelStatistics `json:"unclassifiableObjectSizeInBytes,omitempty"`
    Versioning *bool `json:"versioning,omitempty"`
    
}

