package shared

// OperatingSystem
// The operating system that the image is running.
type OperatingSystem struct {
	Type *OperatingSystemTypeEnum `json:"Type,omitempty"`
}
