package shared

import (
	"time"
)

// AccessKey
// <p>Describes an access key for an Amazon Lightsail bucket.</p> <p>Access keys grant full programmatic access to the specified bucket and its objects. You can have a maximum of two access keys per bucket. Use the <a>CreateBucketAccessKey</a> action to create an access key for a specific bucket. For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> <important> <p>The <code>secretAccessKey</code> value is returned only in response to the <code>CreateBucketAccessKey</code> action. You can get a secret access key only when you first create an access key; you cannot get the secret access key later. If you lose the secret access key, you must create a new access key.</p> </important>
type AccessKey struct {
	AccessKeyID     *string            `json:"accessKeyId,omitempty"`
	CreatedAt       *time.Time         `json:"createdAt,omitempty"`
	LastUsed        *AccessKeyLastUsed `json:"lastUsed,omitempty"`
	SecretAccessKey *string            `json:"secretAccessKey,omitempty"`
	Status          *StatusTypeEnum    `json:"status,omitempty"`
}
