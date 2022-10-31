package shared



type ListApplicationSnapshotsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    SnapshotSummaries []SnapshotDetails `json:"SnapshotSummaries,omitempty"`
    
}

