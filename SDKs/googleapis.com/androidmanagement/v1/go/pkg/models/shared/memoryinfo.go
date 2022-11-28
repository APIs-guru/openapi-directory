package shared

// MemoryInfo
// Information about device memory and storage.
type MemoryInfo struct {
	TotalInternalStorage *string `json:"totalInternalStorage,omitempty"`
	TotalRAM             *string `json:"totalRam,omitempty"`
}
