package shared

// Resources
// Machine resources for a version.
type Resources struct {
	CPU             *float64 `json:"cpu,omitempty"`
	DiskGb          *float64 `json:"diskGb,omitempty"`
	KmsKeyReference *string  `json:"kmsKeyReference,omitempty"`
	MemoryGb        *float64 `json:"memoryGb,omitempty"`
	Volumes         []Volume `json:"volumes,omitempty"`
}
