package shared

type CreateBucketAccessKeyResult struct {
	AccessKey  *AccessKey  `json:"accessKey"`
	Operations []Operation `json:"operations"`
}
