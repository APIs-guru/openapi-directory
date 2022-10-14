package shared

import (
	"time"
)

type S3Object struct {
	BucketArn            *string               `json:"bucketArn,omitempty"`
	ETag                 *string               `json:"eTag,omitempty"`
	Extension            *string               `json:"extension,omitempty"`
	Key                  *string               `json:"key,omitempty"`
	LastModified         *time.Time            `json:"lastModified,omitempty"`
	Path                 *string               `json:"path,omitempty"`
	PublicAccess         *bool                 `json:"publicAccess,omitempty"`
	ServerSideEncryption *ServerSideEncryption `json:"serverSideEncryption,omitempty"`
	Size                 *int64                `json:"size,omitempty"`
	StorageClass         *StorageClassEnum     `json:"storageClass,omitempty"`
	Tags                 []KeyValuePair        `json:"tags,omitempty"`
	VersionID            *string               `json:"versionId,omitempty"`
}
