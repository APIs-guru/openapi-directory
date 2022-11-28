package shared

// Script
// Script runnable.
type Script struct {
	Path *string `json:"path,omitempty"`
	Text *string `json:"text,omitempty"`
}
