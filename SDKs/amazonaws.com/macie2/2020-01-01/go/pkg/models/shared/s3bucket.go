package shared

import (
	"time"
)

// S3Bucket
// Provides information about the S3 bucket that a finding applies to.
type S3Bucket struct {
	AllowsUnencryptedObjectUploads *AllowsUnencryptedObjectUploadsEnum `json:"allowsUnencryptedObjectUploads,omitempty"`
	Arn                            *string                             `json:"arn,omitempty"`
	CreatedAt                      *time.Time                          `json:"createdAt,omitempty"`
	DefaultServerSideEncryption    *ServerSideEncryption               `json:"defaultServerSideEncryption,omitempty"`
	Name                           *string                             `json:"name,omitempty"`
	Owner                          *S3BucketOwner                      `json:"owner,omitempty"`
	PublicAccess                   *BucketPublicAccess                 `json:"publicAccess,omitempty"`
	Tags                           []KeyValuePair                      `json:"tags,omitempty"`
}
