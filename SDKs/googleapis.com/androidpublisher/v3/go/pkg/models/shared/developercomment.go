package shared

// DeveloperComment
// Developer entry from conversation between user and developer.
type DeveloperComment struct {
	LastModified *Timestamp `json:"lastModified,omitempty"`
	Text         *string    `json:"text,omitempty"`
}
