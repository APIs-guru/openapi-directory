package shared

import (
	"time"
)

type BucketMetadata struct {
	AccountID                       *string                             `json:"accountId"`
	AllowsUnencryptedObjectUploads  *AllowsUnencryptedObjectUploadsEnum `json:"allowsUnencryptedObjectUploads"`
	BucketArn                       *string                             `json:"bucketArn"`
	BucketCreatedAt                 *time.Time                          `json:"bucketCreatedAt"`
	BucketName                      *string                             `json:"bucketName"`
	ClassifiableObjectCount         *int64                              `json:"classifiableObjectCount"`
	ClassifiableSizeInBytes         *int64                              `json:"classifiableSizeInBytes"`
	JobDetails                      *JobDetails                         `json:"jobDetails"`
	LastUpdated                     *time.Time                          `json:"lastUpdated"`
	ObjectCount                     *int64                              `json:"objectCount"`
	ObjectCountByEncryptionType     *ObjectCountByEncryptionType        `json:"objectCountByEncryptionType"`
	PublicAccess                    *BucketPublicAccess                 `json:"publicAccess"`
	Region                          *string                             `json:"region"`
	ReplicationDetails              *ReplicationDetails                 `json:"replicationDetails"`
	ServerSideEncryption            *BucketServerSideEncryption         `json:"serverSideEncryption"`
	SharedAccess                    *SharedAccessEnum                   `json:"sharedAccess"`
	SizeInBytes                     *int64                              `json:"sizeInBytes"`
	SizeInBytesCompressed           *int64                              `json:"sizeInBytesCompressed"`
	Tags                            []KeyValuePair                      `json:"tags"`
	UnclassifiableObjectCount       *ObjectLevelStatistics              `json:"unclassifiableObjectCount"`
	UnclassifiableObjectSizeInBytes *ObjectLevelStatistics              `json:"unclassifiableObjectSizeInBytes"`
	Versioning                      *bool                               `json:"versioning"`
}
