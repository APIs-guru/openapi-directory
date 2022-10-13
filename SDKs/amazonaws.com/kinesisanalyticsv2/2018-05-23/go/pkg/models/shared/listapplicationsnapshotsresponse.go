package shared

type ListApplicationSnapshotsResponse struct {
	NextToken         *string           `json:"NextToken"`
	SnapshotSummaries []SnapshotDetails `json:"SnapshotSummaries"`
}
