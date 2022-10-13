package shared

import (
	"time"
)

type S3Bucket struct {
	AllowsUnencryptedObjectUploads *AllowsUnencryptedObjectUploadsEnum `json:"allowsUnencryptedObjectUploads"`
	Arn                            *string                             `json:"arn"`
	CreatedAt                      *time.Time                          `json:"createdAt"`
	DefaultServerSideEncryption    *ServerSideEncryption               `json:"defaultServerSideEncryption"`
	Name                           *string                             `json:"name"`
	Owner                          *S3BucketOwner                      `json:"owner"`
	PublicAccess                   *BucketPublicAccess                 `json:"publicAccess"`
	Tags                           []KeyValuePair                      `json:"tags"`
}
