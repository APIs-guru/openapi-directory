package shared



type DescribeSnapshotsRequest struct {
    ClusterName *string `json:"ClusterName,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ShowDetail *bool `json:"ShowDetail,omitempty"`
    SnapshotName *string `json:"SnapshotName,omitempty"`
    Source *string `json:"Source,omitempty"`
    
}

