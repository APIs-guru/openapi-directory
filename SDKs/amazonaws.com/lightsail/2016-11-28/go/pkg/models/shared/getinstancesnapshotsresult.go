package shared

type GetInstanceSnapshotsResult struct {
	InstanceSnapshots []InstanceSnapshot `json:"instanceSnapshots"`
	NextPageToken     *string            `json:"nextPageToken"`
}
