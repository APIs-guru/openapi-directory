package shared



type GetAutoSnapshotsResult struct {
    AutoSnapshots []AutoSnapshotDetails `json:"autoSnapshots,omitempty"`
    ResourceName *string `json:"resourceName,omitempty"`
    ResourceType *ResourceTypeEnum `json:"resourceType,omitempty"`
    
}

