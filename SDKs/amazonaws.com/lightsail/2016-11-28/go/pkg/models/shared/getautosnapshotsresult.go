package shared

type GetAutoSnapshotsResult struct {
	AutoSnapshots []AutoSnapshotDetails `json:"autoSnapshots"`
	ResourceName  *string               `json:"resourceName"`
	ResourceType  *ResourceTypeEnum     `json:"resourceType"`
}
