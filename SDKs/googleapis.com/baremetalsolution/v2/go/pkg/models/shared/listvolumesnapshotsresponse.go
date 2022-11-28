package shared

// ListVolumeSnapshotsResponse
// Response message containing the list of volume snapshots.
type ListVolumeSnapshotsResponse struct {
	NextPageToken   *string          `json:"nextPageToken,omitempty"`
	Unreachable     []string         `json:"unreachable,omitempty"`
	VolumeSnapshots []VolumeSnapshot `json:"volumeSnapshots,omitempty"`
}
