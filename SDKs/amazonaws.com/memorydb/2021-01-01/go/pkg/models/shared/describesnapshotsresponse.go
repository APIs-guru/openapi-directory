package shared

type DescribeSnapshotsResponse struct {
	NextToken *string    `json:"NextToken"`
	Snapshots []Snapshot `json:"Snapshots"`
}
