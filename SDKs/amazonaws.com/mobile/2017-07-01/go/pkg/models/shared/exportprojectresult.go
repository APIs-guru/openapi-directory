package shared

type ExportProjectResult struct {
	DownloadURL *string `json:"downloadUrl"`
	ShareURL    *string `json:"shareUrl"`
	SnapshotID  *string `json:"snapshotId"`
}
