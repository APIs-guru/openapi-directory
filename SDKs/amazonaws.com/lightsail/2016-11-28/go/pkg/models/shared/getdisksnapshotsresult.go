package shared

type GetDiskSnapshotsResult struct {
	DiskSnapshots []DiskSnapshot `json:"diskSnapshots"`
	NextPageToken *string        `json:"nextPageToken"`
}
