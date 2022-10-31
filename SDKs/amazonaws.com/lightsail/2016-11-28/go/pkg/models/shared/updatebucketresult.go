package shared



type UpdateBucketResult struct {
    Bucket *Bucket `json:"bucket,omitempty"`
    Operations []Operation `json:"operations,omitempty"`
    
}

