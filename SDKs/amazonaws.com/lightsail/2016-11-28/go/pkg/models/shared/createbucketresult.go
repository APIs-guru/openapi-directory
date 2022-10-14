package shared

type CreateBucketResult struct {
	Bucket     *Bucket     `json:"bucket,omitempty"`
	Operations []Operation `json:"operations,omitempty"`
}
