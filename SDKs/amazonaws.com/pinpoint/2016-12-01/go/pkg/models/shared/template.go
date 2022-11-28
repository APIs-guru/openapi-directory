package shared

// Template
// Specifies the name and version of the message template to use for the message.
type Template struct {
	Name    *string `json:"Name,omitempty"`
	Version *string `json:"Version,omitempty"`
}
