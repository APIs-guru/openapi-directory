package shared

type DeveloperComment struct {
	LastModified *Timestamp `json:"lastModified,omitempty"`
	Text         *string    `json:"text,omitempty"`
}
