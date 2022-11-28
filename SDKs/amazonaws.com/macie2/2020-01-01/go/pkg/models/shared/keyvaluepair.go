package shared

// KeyValuePair
// Provides information about the tags that are associated with an S3 bucket or object. Each tag consists of a required tag key and an associated tag value.
type KeyValuePair struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}
