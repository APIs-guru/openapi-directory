package shared

// Library
// Third-party Python runtime library that is required by the application.
type Library struct {
	Name    *string `json:"name,omitempty"`
	Version *string `json:"version,omitempty"`
}
