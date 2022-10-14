package shared

type CreateBucketAccessKeyResult struct {
	AccessKey  *AccessKey  `json:"accessKey,omitempty"`
	Operations []Operation `json:"operations,omitempty"`
}
