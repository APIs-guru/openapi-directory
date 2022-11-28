package shared

// InstanceSnapshotInfo
// Describes an instance snapshot.
type InstanceSnapshotInfo struct {
	FromBlueprintID *string    `json:"fromBlueprintId,omitempty"`
	FromBundleID    *string    `json:"fromBundleId,omitempty"`
	FromDiskInfo    []DiskInfo `json:"fromDiskInfo,omitempty"`
}
