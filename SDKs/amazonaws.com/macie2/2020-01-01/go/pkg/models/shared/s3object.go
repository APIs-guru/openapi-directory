package shared

import (
	"time"
)

type S3Object struct {
	BucketArn            *string               `json:"bucketArn"`
	ETag                 *string               `json:"eTag"`
	Extension            *string               `json:"extension"`
	Key                  *string               `json:"key"`
	LastModified         *time.Time            `json:"lastModified"`
	Path                 *string               `json:"path"`
	PublicAccess         *bool                 `json:"publicAccess"`
	ServerSideEncryption *ServerSideEncryption `json:"serverSideEncryption"`
	Size                 *int64                `json:"size"`
	StorageClass         *StorageClassEnum     `json:"storageClass"`
	Tags                 []KeyValuePair        `json:"tags"`
	VersionID            *string               `json:"versionId"`
}
