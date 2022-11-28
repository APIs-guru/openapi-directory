package shared

// DocumentRequires
// An SSM document required by the current document.
type DocumentRequires struct {
	Name    string  `json:"Name"`
	Version *string `json:"Version,omitempty"`
}
