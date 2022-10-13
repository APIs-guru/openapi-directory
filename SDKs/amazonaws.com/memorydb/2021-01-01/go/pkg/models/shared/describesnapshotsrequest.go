package shared

type DescribeSnapshotsRequest struct {
	ClusterName  *string `json:"ClusterName"`
	MaxResults   *int64  `json:"MaxResults"`
	NextToken    *string `json:"NextToken"`
	ShowDetail   *bool   `json:"ShowDetail"`
	SnapshotName *string `json:"SnapshotName"`
	Source       *string `json:"Source"`
}
