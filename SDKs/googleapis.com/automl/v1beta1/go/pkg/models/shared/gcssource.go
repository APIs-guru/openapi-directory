package shared

// GcsSource
// The Google Cloud Storage location for the input content.
type GcsSource struct {
	InputUris []string `json:"inputUris,omitempty"`
}
