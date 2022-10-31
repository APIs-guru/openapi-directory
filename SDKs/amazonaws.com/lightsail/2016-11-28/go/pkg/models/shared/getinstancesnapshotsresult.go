package shared



type GetInstanceSnapshotsResult struct {
    InstanceSnapshots []InstanceSnapshot `json:"instanceSnapshots,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

