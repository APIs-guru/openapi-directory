package shared



type ExportProjectResult struct {
    DownloadURL *string `json:"downloadUrl,omitempty"`
    ShareURL *string `json:"shareUrl,omitempty"`
    SnapshotID *string `json:"snapshotId,omitempty"`
    
}

