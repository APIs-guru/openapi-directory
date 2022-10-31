package shared



type AddOn struct {
    Name *string `json:"name,omitempty"`
    NextSnapshotTimeOfDay *string `json:"nextSnapshotTimeOfDay,omitempty"`
    SnapshotTimeOfDay *string `json:"snapshotTimeOfDay,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

