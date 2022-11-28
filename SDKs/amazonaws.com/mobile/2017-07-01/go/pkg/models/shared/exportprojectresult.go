package shared

// ExportProjectResult
//
//	Result structure used for requests to export project configuration details.
type ExportProjectResult struct {
	DownloadURL *string `json:"downloadUrl,omitempty"`
	ShareURL    *string `json:"shareUrl,omitempty"`
	SnapshotID  *string `json:"snapshotId,omitempty"`
}
