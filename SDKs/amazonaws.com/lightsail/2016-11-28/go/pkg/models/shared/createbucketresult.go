package shared

type CreateBucketResult struct {
	Bucket     *Bucket     `json:"bucket"`
	Operations []Operation `json:"operations"`
}
