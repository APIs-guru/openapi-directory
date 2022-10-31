package shared

type GetBucketAccessKeysResult struct {
	AccessKeys []AccessKey `json:"accessKeys,omitempty"`
}
