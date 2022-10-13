package shared

type UpdateBucketResult struct {
	Bucket     *Bucket     `json:"bucket"`
	Operations []Operation `json:"operations"`
}
