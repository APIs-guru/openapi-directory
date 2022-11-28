package shared

// DiskMap
// Describes a block storage disk mapping.
type DiskMap struct {
	NewDiskName      *string `json:"newDiskName,omitempty"`
	OriginalDiskPath *string `json:"originalDiskPath,omitempty"`
}
