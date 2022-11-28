package shared

// BucketState
// Describes the state of an Amazon Lightsail bucket.
type BucketState struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}
