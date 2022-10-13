package shared

type BucketServerSideEncryption struct {
	KmsMasterKeyID *string   `json:"kmsMasterKeyId"`
	Type           *TypeEnum `json:"type"`
}
