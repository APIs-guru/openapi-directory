package shared

type GetDiskSnapshotsResult struct {
	DiskSnapshots []DiskSnapshot `json:"diskSnapshots,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
}
