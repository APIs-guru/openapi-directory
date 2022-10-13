package shared

type InstanceSnapshotInfo struct {
	FromBlueprintID *string    `json:"fromBlueprintId"`
	FromBundleID    *string    `json:"fromBundleId"`
	FromDiskInfo    []DiskInfo `json:"fromDiskInfo"`
}
