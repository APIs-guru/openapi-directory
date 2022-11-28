package shared

// Tag
// Tags point to a version and represent an alternative name that can be used to access the version.
type Tag struct {
	Name    *string `json:"name,omitempty"`
	Version *string `json:"version,omitempty"`
}
