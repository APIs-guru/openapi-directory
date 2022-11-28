package shared

// AttachedDisk
// Describes a block storage disk that is attached to an instance, and is included in an automatic snapshot.
type AttachedDisk struct {
	Path     *string `json:"path,omitempty"`
	SizeInGb *int64  `json:"sizeInGb,omitempty"`
}
