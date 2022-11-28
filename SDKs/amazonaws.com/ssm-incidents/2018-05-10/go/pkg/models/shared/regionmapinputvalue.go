package shared

// RegionMapInputValue
// The mapping between a Region and the key that's used to encrypt the data.
type RegionMapInputValue struct {
	SseKmsKeyID *string `json:"sseKmsKeyId,omitempty"`
}
