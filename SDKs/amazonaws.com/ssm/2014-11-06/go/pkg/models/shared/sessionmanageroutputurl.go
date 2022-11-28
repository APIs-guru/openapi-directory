package shared

// SessionManagerOutputURL
// Reserved for future use.
type SessionManagerOutputURL struct {
	CloudWatchOutputURL *string `json:"CloudWatchOutputUrl,omitempty"`
	S3OutputURL         *string `json:"S3OutputUrl,omitempty"`
}
