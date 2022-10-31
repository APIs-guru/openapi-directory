package shared

type DescribeSnapshotsResponse struct {
	NextToken *string    `json:"NextToken,omitempty"`
	Snapshots []Snapshot `json:"Snapshots,omitempty"`
}
